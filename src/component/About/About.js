import React from 'react'
import { Link } from 'react-router-dom'
import './About.scss'

export const About = () => {
  return (
    <div className='About'>
      <Link to='/' className='title'>&#10550; About "Combination Trainer" App</Link>
      <p>
        The source code of the project can be found at the <a className='social-link' href='https://github.com/TataRozhdez/Poker-Hand-Trainer'>Githab</a>.<br />
        Write their feedback or wishes in <a className='social-link' href='https://linkedin.com/in/tatarozhdez'>LinkedIn</a>.
      </p>
      <p>Have a good game!</p>
    </div>
  )
}

// Целью данного приложения является как можно быстрее определить (?) руку покера.
// Существует два уровня сложности игры: на 5 карт (здесь вы определяете...) и на 7 карт (вам предстоит понять...). (?) Ваш результат скорости выбора руки будет сохранен до конца игры в нижней таблице.

// Приятной игры!
