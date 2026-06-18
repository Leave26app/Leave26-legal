---
layout: page
title: Data Safety Declaration
permalink: /data-safety/
---

**Project:** Leave26
**Last Updated:** 2026-06-18

---

## Purpose

This document summarizes how Leave26 currently handles user data.

It serves as an internal reference for future Google Play Data Safety declarations, privacy reviews and compliance checks.

---

## Current MVP Status

The current version of Leave26 stores all user data locally on the user's device.

No user accounts are required.

No cloud synchronization is currently implemented.

No personal data is transmitted to the developer.

The developer has no access to any data stored by the application on the user's device.

---

## Data Collected

Current status:

```text
No personal data is collected by the developer.
```

The application does not collect:

* names
* email addresses
* phone numbers
* precise location
* contacts
* messages
* payment information
* health information
* identifiers
* browsing history

The developer has no access to any locally stored user data.

---

## Data Shared

Current status:

```text
No user data is shared with third parties.
```

The application does not share data with:

* advertisers
* analytics providers
* data brokers
* external partners

---

## Local Device Storage

The following information may be stored locally on the user's device:

* completed checkouts
* checkout history
* checkout routes
* 180 counter
* achievement progress
* milestone progress
* application settings

This information remains on the user's device and is not transmitted to external servers.

---

## User Accounts

Current status:

```text
Not implemented
```

The application does not require:

* registration
* login
* user profiles
* account creation

---

## Cloud Services

Current status:

```text
Not implemented
```

The application currently does not use:

* Firebase Authentication
* Firestore
* Realtime Database
* cloud synchronization
* hosted user accounts

---

## Analytics

Current status:

```text
Not implemented
```

The application currently does not use:

* Google Analytics
* Firebase Analytics
* Mixpanel
* Amplitude
* similar analytics platforms

---

## Advertising

Current status:

```text
Not implemented
```

The application currently does not display advertisements.

The application currently does not use:

* AdMob
* advertising SDKs
* advertising identifiers

---

## Security

User data is stored locally on the user's device and is not transmitted to external servers.

No user information is intentionally collected, transferred, shared or processed outside the user's device.

---

## Future Changes

Future versions may introduce optional features such as:

* Google Sign-In
* Firebase Authentication
* cloud synchronization
* user accounts
* backups
* analytics
* premium functionality

If these features are implemented, this document and the Google Play Data Safety declaration will be updated accordingly.

---

## Current Google Play Data Safety Expectation

Based on the current MVP architecture:

```text
Data collected: No
Data shared: No
Data sold: No
User accounts: No
Advertising: No
Analytics: No
```

---

## Status

Current assessment:

```text
Local-only MVP.
No personal data collected.
No data shared.
No advertising.
No analytics.
```

---

## Notes

This document reflects the current MVP version of Leave26.

Any future implementation of cloud services, user accounts, Google Sign-In, analytics, advertising, premium features or third-party integrations will require a review and update of this document.

Google Play Data Safety information must always match the actual behavior of the released application.
