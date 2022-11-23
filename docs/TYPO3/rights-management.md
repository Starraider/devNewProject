# Rights Management

## Backend User Management

The basic idea is to have certain backend user groups that focus on only one specific purpose (such as access to files, f.e.).
Backend user groups with the same focus have the same prefix (like "FM_" for file mount).

Finally the backend user groups with the "R_"-Prefix, bring all the different permissions together in a specific "role", like "News-Editor" f.e.

These principles are also [descripted here](https://typo3worx.eu/2017/02/typo3-backend-user-management/)

### Backend User Group Prefixes and their purpose
- „DM_” = Database Mount groups contain the entry point to the page tree

- „PG_“ = Page Groups will be used in the page module to set permissions

- „ACL_“ = Access Control List groups contain permissions to database tables and modules

- „FM_” = File Mount groups only the file mounts to which members should have access

- „R_“ = Role groups are the to group the different permissions together
