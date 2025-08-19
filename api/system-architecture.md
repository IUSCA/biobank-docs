# Biobank System Architecture

## High-Level System Architecture

```mermaid
graph TB
    %% Main Application Cluster
    subgraph "Main Application"
        direction TB
        Proxy[🌐 Nginx Reverse Proxy]
        
        subgraph "Frontend"
            UI[🖥️ Vue.js UI<br/>Port 443]
        end
        
        subgraph "Backend Services"
            API[⚡ Express.js API<br/>Port 3030]
            SecureDownload[🔒 Secure Download Service<br/>Node.js]
        end
        
        subgraph "Database Layer"
            PostgresMain[(🗃️ PostgreSQL<br/>Main Database<br/>Port 5432)]
        end
    end

    %% Worker Services Cluster
    subgraph "Worker Services"
        direction TB
        CeleryWorkers[🔄 Celery Workers<br/>Python]
        FileServer[📁 Nginx File Server]
        
        subgraph "Worker Infrastructure"
            RabbitMQ[(🐰 RabbitMQ<br/>Message Queue)]
            MongoDB[(🍃 MongoDB<br/>Result Backend)]
        end
    end

    %% Core Services (External Dependencies)
    subgraph "Core Services"
        direction TB
        RhythmAPI[ Rhythm API<br/>FastAPI]
        AuthService[🔑 Signet Auth<br/>Flask]
    end

    %% External Users and Systems
    subgraph "External"
        Users[👥 Researchers & Analysts]
        HPFS[🗄️ HPFS Storage]
        SDA[🗄️ SDA Storage]
        ScratchStorage[💾 Slate Scratch Storage]
        CAS[🔐 CAS Authentication]
        ExtData[📊 External Genomic Data]
    end


    %% User Interactions
    Users --> Proxy
    Proxy --> UI
    UI --> API
    
    %% Authentication Flow
    Users --> CAS
    CAS --> AuthService
    AuthService --> RhythmAPI
    
    %% API Connections
    API --> PostgresMain
    API --> RhythmAPI
    API <--> CeleryWorkers
    
    %% Worker Connections
    CeleryWorkers --> RabbitMQ
    CeleryWorkers --> MongoDB
    CeleryWorkers --> ScratchStorage
    CeleryWorkers --> HPFS
    CeleryWorkers --> SDA
    
    %% Data Ingestion
    ExtData --> CeleryWorkers
    
    %% File Access
    UI --> FileServer
    FileServer --> SecureDownload
    FileServer --> ScratchStorage
    
    %% Core Service Connections
    RhythmAPI --> RabbitMQ
    RhythmAPI --> MongoDB

    %% Styling
    classDef frontend fill:#e1f5fe
    classDef backend fill:#f3e5f5
    classDef database fill:#e8f5e8
    classDef worker fill:#fff3e0
    classDef external fill:#fce4ec
    classDef storage fill:#f1f8e9
    
    class UI frontend
    class API,SecureDownload backend
    class PostgresMain,MongoDB,RabbitMQ database
    class CeleryWorkers,FileServer worker
    class Users,HPFS,SDA,CAS,ExtData,RhythmAPI,AuthService external
    class ScratchStorage storage
```

## Data Flow Architecture

```mermaid
graph LR
    %% Data Ingestion Flow
    subgraph "Data Ingestion Pipeline"
        direction TB
        A[📊 Raw Genomic Data] --> B[🔄 Celery Workers]
        B --> C[✅ Data Validation]
        C --> D[🧬 Variant Processing]
        D --> E[📝 Annotation Enrichment]
        E --> F[(🗃️ PostgreSQL Storage)]
        F --> G[📊 Statistics Generation]
        G --> H[🔍 Search Indexing]
    end

    %% Cohort Query Flow
    subgraph "Cohort Building Pipeline"
        direction TB
        I[🖥️ Query Builder UI] --> J[📋 Query Validation]
        J --> K[🔧 SQL Generation]
        K --> L[⚡ Database Execution]
        L --> M[💾 Result Caching]
        M --> N[📈 Visualization]
    end

    %% File Access Flow
    subgraph "Secure File Access"
        direction TB
        O[👤 User Request] --> P[🔐 Authentication]
        P --> Q[✅ Authorization Check]
        Q --> R[🎫 Token Generation]
        R --> S[📁 File Server]
        S --> T[📥 Secure Download]
    end
```

## Database Schema Overview

```mermaid
erDiagram
    %% Core Entities
    USER ||--o{ COHORT : creates
    USER ||--o{ PROJECT : participates
    USER ||--o{ DATASET_AUDIT : logs
    
    %% Participant Data
    PARTICIPANT ||--o{ DEMOGRAPHIC : has
    PARTICIPANT ||--o{ LAB : has
    PARTICIPANT ||--o{ DX : has
    PARTICIPANT ||--o{ MEDICATION : has
    PARTICIPANT ||--o{ HOSPITAL : has
    PARTICIPANT ||--o{ COVID_TEST : has
    PARTICIPANT ||--o{ COVID_VAX : has
    
    %% Genomic Data
    SOURCE ||--o{ VARIANT : contains
    SNAPSHOT ||--o{ GENOTYPE_SET : includes
    GENOTYPE_SET ||--o{ GENOTYPE_FILE : contains
    GENOTYPE_SET ||--o{ GENOTYPE_SAMPLE : includes
    
    %% Cohort System
    COHORT {
        uuid id PK
        string name
        json query
        int[] participants
        boolean is_published
        boolean is_locked
        boolean is_protected
        boolean is_temp
    }
    
    %% Variant Analysis
    VARIANT {
        int chr PK
        bigint position PK
        string ref PK
        string alt PK
        int source_id PK
        boolean phase
        int[] genotype
    }
    
    ANNOTATION {
        int chr PK
        bigint position PK
        string ref PK
        string alt PK
        string func
        string[] genes
        float af_nfe
        string cln_sig
    }
    
    %% Data Management
    DATASET ||--o{ DATASET_FILE : contains
    DATASET ||--o{ WORKFLOW : processes
    PROJECT ||--o{ DATASET : includes
```

## Service Communication Patterns

```mermaid
sequenceDiagram
    participant U as User
    participant UI as Vue.js UI
    participant API as Express API
    participant DB as PostgreSQL
    participant W as Celery Workers
    participant Q as RabbitMQ
    participant FS as File Server

    %% Cohort Creation Flow
    Note over U,FS: Cohort Creation Workflow
    U->>UI: Build Query
    UI->>API: POST /cohorts
    API->>DB: Validate Query Schema
    API->>DB: Generate SQL
    API->>DB: Execute Query
    DB-->>API: Participant IDs
    API->>DB: Store Cohort
    API-->>UI: Cohort Created
    UI-->>U: Show Results

    %% Data Processing Flow
    Note over U,FS: Data Processing Workflow
    U->>UI: Upload Dataset
    UI->>API: POST /datasets
    API->>Q: Queue Processing Task
    Q->>W: Process Dataset
    W->>DB: Store Processed Data
    W->>Q: Update Status
    Q-->>API: Task Complete
    API-->>UI: Processing Complete
    UI-->>U: Dataset Ready

    %% File Download Flow
    Note over U,FS: Secure File Access
    U->>UI: Request File
    UI->>API: GET /files/{id}
    API->>DB: Check Permissions
    API-->>UI: Download Token
    UI->>FS: Download with Token
    FS-->>UI: File Stream
    UI-->>U: File Downloaded
```


## Deployment Architecture

```mermaid
graph TB
    subgraph "Docker Compose Environment"
        direction TB
        
        subgraph "Application Containers"
            UIContainer[🐳 UI Container<br/>node:19<br/>Vite Dev Server]
            APIContainer[🐳 API Container<br/>node:19<br/>Express + Prisma]
        end
        
        subgraph "Database Containers"
            PostgresContainer[🐳 PostgreSQL Container<br/>postgres:14.5<br/>Partitioned Tables]
        end
        
        subgraph "External Services"
            WorkerServices[🔄 Python Workers<br/>Poetry + Celery]
            SecureDownloadService[🔒 Secure Download<br/>Node.js Service]
        end
        
        subgraph "Volumes"
            UIModules[📦 ui_modules]
            APIModules[📦 api_modules]
            DBData[💾 PostgreSQL Data]
        end
    end
    
    subgraph "Host Network"
        LocalHost[🖥️ localhost:443 → UI]
        APIHost[⚡ localhost:3030 → API]
        DBHost[🗃️ localhost:5432 → DB]
    end
    
    UIContainer --> UIModules
    APIContainer --> APIModules
    PostgresContainer --> DBData
    
    LocalHost --> UIContainer
    APIHost --> APIContainer
    DBHost --> PostgresContainer
