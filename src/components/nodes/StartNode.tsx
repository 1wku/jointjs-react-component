import { shapes } from 'jointjs'
import { useContext, useEffect } from 'react'
import { fontAttributes, startColor } from './definition'
import { MasterContext } from '../JointJs'

function createStart(x: number, y: number, text: string = 'START') {
	return new shapes.standard.Rectangle({
		position: { x: x + 10, y: y + 5 },
		size: { width: 80, height: 50 },
		z: 1,
		attrs: {
			body: {
				rx: 25,
				ry: 25,
				fill: startColor,
				stroke: 'none',
			},
			label: {
				...fontAttributes,
				text,
			},
		},
	})
}

function StartNode({ x, y, text }: { x: number; y: number; text?: string }) {
	const masterContext = useContext(MasterContext)

	useEffect(() => {
		masterContext.graph.addCell(createStart(x, y, text))
	}, [])

	return <></>
}

export default StartNode
