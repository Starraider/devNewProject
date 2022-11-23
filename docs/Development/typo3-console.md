# typo3-console

Here you can find the [typo3-console documentation](https://docs.typo3.org/p/helhum/typo3-console/main/en-us/Index.html).

Attention: The typo3-console runs only inside the container!
## Most usefull commands

```bash
# Flush all caches in a reliable and robust way
ddev typo3cms cache:flush
ddev typo3cms cache:flush --force


# Perform database schema updates
ddev typo3cms database:updateschema
# safer way to update the db schema
ddev typo3cms database:updateschema "*.add,*.change"


# Update translated labels
ddev typo3cms language:update

# Lock/Unlock backend for editors
ddev typo3cms backend:lockforeditors
ddev typo3cms backend:unlockforeditors

# Create admin backend user
ddev typo3cms backend:createadmin {username} {password}
```
