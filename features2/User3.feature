Feature: Ayuda Ingreso

    Como usuario quiero obtener ayuda rapidamente cuando presente un inconveniente. 

    Scenario: Obtener ayuda

    Given El usuario necesite ayuda
    When este en la pantalla de inicio
    Then se mostrará un boton mediante el cual se pueda solicitar ayuda a un asistente
    