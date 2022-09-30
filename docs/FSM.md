# Finite State Machine

## States
* NOT_STARTED
* READY
* STARTED
* PAUSED
* COMPLETE

## Events
* SetReady
* Left
* Right
* Rotate
* Down
* Drop
* Start/Pause
* Tick
* Reset

## Finite State Machine

```plantuml
@startuml

[*] -[#blue,bold]-> NOT_STARTED
NOT_STARTED -left-> NOT_STARTED: Tick
NOT_STARTED -[#blue,bold]-> READY: SetReady

READY -[#blue,bold]down-> STARTED: Start/Pause
  STARTED -[#gray]-> PAUSED: Start/Pause
  PAUSED -[#gray]-> STARTED: Start/Pause
STARTED -[#blue,bold]-> COMPLETE: Down/Tick/Drop

STARTED -up-> STARTED: LEFT, RIGHT, ROTATE, DOWN, DROP, Tick

STARTED -[#DD33AA]left-> NOT_STARTED: Reset
PAUSED -[#DD33AA]-> NOT_STARTED: Reset
COMPLETE -[#DD33AA]-> NOT_STARTED: Reset

COMPLETE -[#blue,bold]left-> [*]
COMPLETE: Game over

@enduml
```