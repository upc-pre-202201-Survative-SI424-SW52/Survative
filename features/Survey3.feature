Feature: Puntaje encuesta

    Como usuario quiero dar un puntaje a las encuestas realizadas.

    Scenario: Dar puntaje a la encuesta

    Given el usuario desea dar puntaje a una encuesta
    When termine la encuesta
    Then podrá puntear la encuesta realizada


    