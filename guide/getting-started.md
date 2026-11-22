# Getting Started with {{PLATFORM_FULL_NAME}}

## Sign in

1. Go to [{{WEBSITE_URL}}]({{WEBSITE_URL}}).
2. The sign-in page is headed **Sign Up or Log In**. It shows a button for each sign-in method this portal accepts, such as **Indiana University**, **Continue with Google**, or **Continue with Microsoft**.
3. Choose your method and sign in on your institution's or provider's page.

The first time you sign in, the portal asks you to create an account. After that, signing in takes you to **Browse Data**.

### If sign-in is refused

- "It appears that you do not currently have permission to access this application" means your account is not allowed on this portal.
- "It appears that your organization does not currently have permission to access this application" means your organization is not allowed on this portal.
- "Your account did not provide an email address verified by its domain's owner" means the portal cannot trust the address. Try another sign-in method.

Each message has **Go Back**. To ask for access, email {{SUPPORT_EMAIL}}.

## Create your account

The account form has two steps.

1. Check your details. **Email** comes from your sign-in and cannot be changed. Fill in **Full Name**, **Username**, **Institution Name**, and **Institution Type**, then press **Next**.
2. Read the terms of use. The **I Agree to the Terms of Use** box can be ticked once you have scrolled to the end. Tick it and press **Create Account**.

A username has 3 to 30 characters: letters, numbers, and single hyphens.

## When the terms of use change

When updated terms are coming, a banner says when they take effect, with **Review and accept**. Once they take effect, the portal asks you to accept them before you continue. Press **Accept**, or **Log out** to leave.

## Your profile

**Profile**, in the sidebar, shows your username, name, email, roles, and the version of the terms you accepted. Only the portal's administrators can change your username, name, or roles. Use **Contact us** on the profile page to ask.

### Access keys

An access key lets a script use the portal's API in place of your sign-in. You need one for the [API Client](/guide/api-client.md).

1. On **Profile**, under **Personal Access Keys**, press **Generate new access key**, or **Generate new key** if you already have one.
2. Give the key a **Name**, and optionally a **Description**.
3. Set **Expiration (days)**. The form shows the date the key will expire.
4. Tick the **SCOPES** the key needs. Each scope says what it allows.
5. Press **Generate Access Key**.

The portal then shows the key's **Key:** and **Secret:**. Copy the secret at once, because the portal shows it only once. Press **Revoke** to stop a key working. **API Documentation**, beside the keys, opens the API reference.

## Next steps

- **[Browse Data](/guide/data-browser.md)**: see what clinical and genomic data the portal holds.
- **[Cohort Builder](/guide/cohort-builder.md)**: define a group of participants and request access to its data.
- **[Variant Xplorer](/guide/variant-explorer.md)**: search genetic variants across the participants.

## Support

For account problems, email {{SUPPORT_EMAIL}}.
