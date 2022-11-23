# TYPO3 CLI Commands

## Most usefull commands

```bash
# lists all commands
ddev typo3 list

# Update all language files
ddev typo3 language:update

# Cache warmup for all caches
ddev typo3 cache:warmup

# Clear all caches
ddev typo3 cache:flush

# Shows the list of extensions available to the system
ddev typo3 extension:list

# Reset password for user
# The backend URL is necessary to generate the correct links to the TYPO3 instance
ddev typo3 backend:resetpassword https://example.org/typo3/ editor@example.org
```
