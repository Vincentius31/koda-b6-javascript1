```mermaid
flowchart TD
idStart((Start))
idInput[/Input: IS_FEATURE_ACTIVE, num/]
idProcess[IS_FEATURE_ACTIVE = #quot; #quot;, num = 100]
idSwitch{IS_FEATURE_ACTIVE}
idOutputTrue[/Output: #quot;Hello#quot;/]
idOutputFalse[/Output: #quot;Hi#quot;/]
kondisiDefault{num = 100}
kondisiDefaultTrue[/Output: num/]
kondisiDefaultFalse[/Output: #quot;Bonjour#quot;/]
idStop(((Stop)))

idStart --> idInput --> idProcess --> idSwitch
idSwitch -- True --> idOutputTrue --> idStop
idSwitch -- False --> idOutputFalse --> idStop
idInput --> kondisiDefault
kondisiDefault -- True --> kondisiDefaultTrue --> idStop
kondisiDefault -- False --> kondisiDefaultFalse --> idStop
```