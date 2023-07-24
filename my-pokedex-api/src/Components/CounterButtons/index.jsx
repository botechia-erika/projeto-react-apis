import React from "react"
import { useState } from "react"
export function CounterButtons() {
    const [value, setValue] = useControllableState({ defaultValue: 0 })
    return (
      <div>
        <Button onClick={() => setValue(value + 1)}>+</Button>
        <Box as='span' w='200px' mx='24px'>
          {value}
        </Box>
        <Button onClick={() => setValue(value - 1)}>-</Button>
      </div>
    )
  }