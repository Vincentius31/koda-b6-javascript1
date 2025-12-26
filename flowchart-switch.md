```mermaid
flowchart TD
idStart((Start))
idInput[/Input: IS_FEATURE_ACTIVE = #quot; #quot; , num = 100/]
idSwitch{IS_FEATURE_ACTIVE == True}
idOutputTrue[/Output: #quot;Hello#quot;/]
idKondisiFalse{IS_FEATURE_ACTIVE == False}
idOutputFalse[/Output: #quot;Hi#quot;/]
kondisiDefault{num === 100}
kondisiDefaultTrue[/Output: num/]
kondisiDefaultFalse[/Output: #quot;Bonjour#quot;/]
idOutputLanjutkan[/Output: #quot;Lanjutkan#quot;/]
idStop(((Stop)))

idStart --> idInput --> idSwitch
idSwitch -- True --> idOutputTrue --> idOutputLanjutkan --> idStop
idSwitch -- False --> idKondisiFalse 
idKondisiFalse -- True --> idOutputFalse --> idOutputLanjutkan 
idKondisiFalse -- False --> kondisiDefault
kondisiDefault -- True --> kondisiDefaultTrue --> idOutputLanjutkan
kondisiDefault -- False --> kondisiDefaultFalse --> idOutputLanjutkan
```