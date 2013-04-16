Feature:

  @done
  Scenario: miss
    Given my opponent has no ships on a specific position
    When I shoot a torpedo at that position
    Then I missed

  Scenario: hit
    Given my opponent has some ship on a specific position
    When I shoot a torpedo at that position
    Then I hit

  Scenario: sink
    Given my opponent has some ship on a specific position
    And I hit all parts of that ship but the one on that position
    When I shoot a torpedo at that position
    Then that ship is sunk

