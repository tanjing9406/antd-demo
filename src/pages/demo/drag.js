import React, { useEffect, useState } from 'react';
import './style.less'

const DragPage = () => {
    const [cn1, setCn1] = useState('')
    const [cn2, setCn2] = useState('')
    const [lineOpacity, setLineOpacity] = useState(0)
    const [dragging, setDragging] = useState(false)
    const [pt1, setpt1] = useState([60, 100])
    const [pt2, setpt2] = useState([360, 100])
    const [offset, setOffset] = useState([0, 0])
    const [isClick, setIsClick] = useState(true)

    const toggleClass = (cn, fn) => {
        if (!isClick) {
            return
        }
        if (!cn) {
            fn('active')
            return
        }
        fn('')
    }

    const handleMouseDown = (e) => {
        const { clientX, clientY } = e
        setDragging(true)
        setIsClick(true)
        setOffset([-clientX, -clientY])
    }
    const handleMouseMove = (e, point, setPoint) => {
        e.persist()
        if (dragging) {
            setIsClick(false)
            const { clientX, clientY } = e
            const [x, y] = point
            setPoint([x + clientX + offset[0], y + clientY + offset[1]])
            setOffset([-clientX, -clientY])
        }
    }
    const handleMouseUp = (e) => {
        setOffset([0, 0])
        setDragging(false)
    }

    const handleMouseOut = () => {
        setOffset([0, 0])
        setDragging(false)
    }

    useEffect(() => {
        if (cn1 && cn2) {
            setLineOpacity(1)
            return
        }
        setLineOpacity(0)
    }, [cn1, cn2])

    return (
        <div className="drag-demo">
            <div className="msg">可拖动的“块1”和“块2”，建立连接后，连接的连线会随块移动</div>
            <svg width="100%" height="100%"
                xmlns="http://www.w3.org/2000/svg">
                <line x1={pt1[0]} y1={pt1[1]} x2={pt2[0]} y2={pt2[1]} stroke="darkred" opacity={lineOpacity} />
                <circle cx={pt1[0]} cy={pt1[1]} r="50" className={cn1} fill="pink"
                    onClick={() => toggleClass(cn1, setCn1)}
                    onMouseDown={handleMouseDown}
                    onMouseMove={(e) => handleMouseMove(e, pt1, setpt1)}
                    onMouseUp={handleMouseUp}
                    onMouseOut={handleMouseOut}
                />
                <circle cx={pt2[0]} cy={pt2[1]} r="50" fill="pink" className={cn2}
                    onClick={() => toggleClass(cn2, setCn2)}
                    onMouseDown={handleMouseDown}
                    onMouseMove={(e) => handleMouseMove(e, pt2, setpt2)}
                    onMouseOut={handleMouseOut}
                    onMouseUp={handleMouseUp}
                />
            </svg>
        </div>
    )
}

export default DragPage 