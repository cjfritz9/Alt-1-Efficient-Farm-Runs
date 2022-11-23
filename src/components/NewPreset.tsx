import React from "react"
import { useNavigate } from "react-router"

const NewPreset: React.FC = () => {

  const navigate = useNavigate();

  const testHandler = () => {
    localStorage.setItem('efficient_farm_runs', JSON.stringify({
      data: {
        preset1: {
          name: 'Tree Run'
        },
        preset2: {
          name: 'Herb Run'
        },
        preset3: {
          name: 'Full Run'
        }
      }
    }))
    navigate('/')
  }

  return (
    <button className="nis-button" onClick={testHandler}>Generate User Data</button>
  )
}

export default NewPreset;