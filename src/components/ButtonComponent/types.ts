import React from 'react'

export interface IButtonComponentProps {
  type?: 'button' | 'reset' | 'submit'
  children: React.ReactNode
  onClickHandler?: () => void
}
