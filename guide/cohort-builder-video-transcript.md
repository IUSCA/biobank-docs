# Cohort Builder Video Transcript

## Introduction

Hello everyone! Today I'm going to show you how to use the Cohort Builder in the Biobank Research Portal. The Cohort Builder is a user-friendly tool that allows you to create and manage patient cohorts using various filters and clinical/genomic criteria.

## Enabling AI Mode

First, let's make things easier by enabling the AI mode. You'll notice a sparkle icon in the upper right corner of the cohort browser. Let me click on that.

[Click on the sparkle icon]

This opens a dropdown with two AI options:
1. "Generate Cohort title and description using AI" - This will automatically name your cohorts and provide descriptions
2. "Chat with an AI to create cohorts" - This enables a chat interface where you can describe cohorts in natural language

Let's enable both options by checking these boxes. This will make our cohort creation process much more intuitive.

## Creating a Phenotype Cohort

Now, let's create a phenotype cohort. A phenotype cohort is a group of participants that share specific clinical characteristics.

First, I'll click on the "Add Filter" button to start defining our cohort criteria.

[Click on "Add Filter"]

This opens a modal where we can select from various filter categories. Let's select "Demographics" and then "Age".

[Select "Demographics" > "Age"]

Now I can specify an age range. Let's say we want participants who are 50 years or older. I'll set the operator to "greater than or equal to" and enter "50" as the value.

[Set age filter to ≥ 50]

You'll notice that the system automatically updates the participant count based on our filter. This gives us immediate feedback on how many participants match our criteria.

Let's add another filter. I'll click "Add Filter" again and this time select "Demographics" > "Gender".

[Click "Add Filter" and select "Demographics" > "Gender"]

I'll select "Female" from the dropdown.

[Select "Female"]

Now our cohort includes female participants who are 50 years or older.

Notice that at the top of the filter group, there's a dropdown that says "Matching All". This means that participants must match ALL of our criteria (this is an AND operation). If we change this to "Any", participants would need to match at least one criterion (an OR operation).

[Point to "Matching All" dropdown]

Thanks to the AI mode we enabled earlier, the system has automatically generated a name and description for our cohort. You can see it displayed at the top of the cohort card.

## Combining Cohorts Using Union/Intersection

Now, let's create another cohort and then demonstrate how to combine cohorts using union and intersection operations.

I'll click on the "Add Cohort" button to create a new cohort.

[Click "Add Cohort"]

(Note: I really liked the cohorts that you chose in your video! Please keep those)

Now we have two cohorts:
1. Female participants aged 50+ 
2. ___

Let's combine these cohorts. Between the two cohort cards, you'll notice a dropdown that shows the logical operator for combining them. By default, it's set to "Union".

[Point to the operator dropdown between cohorts]

The union operation (∪) includes all participants from both cohorts. This means our combined cohort will include anyone who is EITHER in the first cohort OR in the second cohort.

Let's click on this dropdown to see other options.

[Click on the operator dropdown]

We can select "Intersection" instead.

[Select "Intersection"]

The intersection operation (∩) includes only participants who are in BOTH cohorts. This means our combined cohort will only include participants who meet the criteria for both the first AND second cohort.

There are also other operations available:
- "Difference" (−): Includes participants from the first cohort who are NOT in the second cohort
- "Unique (Symmetric Difference)" (⊖): Includes participants who are in one cohort or the other, but NOT both


You can see that the combined cohort count is updated automatically. This represents the total number of unique participants after applying the operation.

## Submitting Your Cohort for Review

Once you have created a cohort that you'd like to analyze in more detail, you'll need to save it and submit it for review. Let me show you how to do that.

First, make sure to save all your cohort groups by clicking the "Save" button at the top right of each cohort card.

[Click "Save" button on each cohort card]

You'll be prompted to confirm or edit the cohort name and description. Once you're satisfied, click "Save" in the dialog.

[Confirm cohort name and description, then click "Save"]

After saving your cohorts, return to the main cohort list screen by clicking on "Cohorts" in the navigation menu.

[Click on "Cohorts" in the navigation menu]

From the cohort list, find the cohort you want to submit for review and click on the "Actions" button next to it.

[Click "Actions" button]

Select "Submit for Review" from the dropdown menu.

[Select "Submit for Review"]

This will redirect you to a REDCap form where you'll need to provide additional information about your research project and the intended use of this cohort. The scientific review committee will use this information to evaluate your request.

[Show REDCap form]

Complete all required fields in the REDCap form, including:
- Project title
- Research objectives
- Methodology
- Expected outcomes
- Timeline
- Any additional resources needed

Once you've filled out the form, click "Submit" to send your request to the scientific review committee.

[Click "Submit" on REDCap form]

You'll receive email notifications about the status of your request, and you can also check the status in the Biobank Research Portal under "My Requests."

This completes the process of creating and submitting a cohort for review in the Biobank Research Portal.


# Conclusion

That's it! We've learned how to:

1. Create phenotype cohorts with various filters and logical operators
2. Combine cohorts using union and intersection operations
3. Submit the cohort for data access requests. 

The Cohort Builder is a flexible and powerful tool that allows you to define precisely the group of participants you're interested in studying. Once you're satisfied with your cohort, you can save it, lock it, and request access to participant-level data through the trusted research environment.

Thank you for watching this tutorial on the Biobank Research Portal's Cohort Builder!
