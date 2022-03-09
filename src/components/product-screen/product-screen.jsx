import React, { useEffect, useState } from 'react'
import MessageWindow from '../message-window/message-window'
import product from './product.png'
import darkPinkBubble from './dark-pink-bubble.png'
import lightBlueBubble from './light-blue.png'
import AnimatedElement from '../animated-element/animated-element'
import { wobbleAnimation } from '../../animations/animations'
import './product-screen.scss'
import ProsBoard from '../pros-board/pros-board'

export default function ProductScreen({ setBackgroundPic }) {
  const [isOpen, setIsOpen] = useState(false)
  const createModalWindow = () => {
    const shadow = document.createElement('div')
    shadow.classList.add('shadow')
    document.body.append(shadow)
  }
  const openModal = () => {
    const shadow = document.getElementsByClassName('shadow')[0]
    shadow.classList.add('shadow--active')
    const modal = document.getElementsByClassName('message-window')[0]
    modal.classList.add('message-window--active')
    const product = document.getElementsByClassName(
      'product-screen__product'
    )[0]
    product.style.zIndex = '20'
  }
  useEffect(() => {
    createModalWindow()
  })

  const [items, setItems] = useState([
    { text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
    { text: 'Lorem ipsum dolor sit amet.' },
    { text: 'Lorem ipsum dolor sit amet.' },
    { text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
    { text: 'Lorem ipsum dolor sit amet.' },
    { text: 'Lorem ipsum dolor sit amet.' },
  ])
  return (
    <div className="product-screen">
      <div className="product-screen__content">
        <div className="product-screen__message-window">
          <div className="product-screen__product">
            <img src={product} alt="seems like a bottle of soup" />
            <AnimatedElement
              x={50}
              y={150}
              src={darkPinkBubble}
              alt="dark pink bubble"
              animation={wobbleAnimation}
              width={30}
              height={30}
              offset={20}
              style={{ zIndex: '2' }}
            ></AnimatedElement>
            <AnimatedElement
              x={50}
              y={10}
              src={lightBlueBubble}
              alt="light blue bubble"
              animation={wobbleAnimation}
              width={45}
              height={45}
              offset={20}
              style={{ zIndex: '4' }}
            ></AnimatedElement>
            <AnimatedElement
              x={50}
              y={200}
              src={lightBlueBubble}
              alt="light blue bubble"
              animation={wobbleAnimation}
              width={45}
              height={45}
              offset={20}
              style={{ zIndex: '4' }}
            ></AnimatedElement>
            <AnimatedElement
              x={100}
              y={250}
              src={lightBlueBubble}
              alt="light blue bubble"
              animation={wobbleAnimation}
              width={45}
              height={45}
              offset={20}
              style={{ zIndex: '4' }}
            ></AnimatedElement>
            <AnimatedElement
              x={50}
              y={300}
              src={lightBlueBubble}
              alt="light blue bubble"
              animation={wobbleAnimation}
              width={45}
              height={45}
              offset={20}
              style={{ zIndex: '5' }}
            ></AnimatedElement>
            <AnimatedElement
              x={35}
              y={265}
              src={darkPinkBubble}
              alt="light blue bubble"
              animation={wobbleAnimation}
              width={45}
              height={45}
              offset={20}
              style={{ zIndex: '5' }}
            ></AnimatedElement>
            <AnimatedElement
              x={0}
              y={120}
              src={darkPinkBubble}
              alt="light blue bubble"
              animation={wobbleAnimation}
              width={45}
              height={45}
              offset={20}
              style={{ zIndex: '5' }}
            ></AnimatedElement>
          </div>
          <div className="product-screen__info">
            <MessageWindow
              items={items}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              header="преимущества"
              title="xy"
            ></MessageWindow>
            )
            <ProsBoard
              setIsOpen={setIsOpen}
              openModal={openModal}
              header="ключевое сообщение"
              title="xy"
            ></ProsBoard>
          </div>
        </div>
      </div>
    </div>
  )
}
