import { shapes } from 'jointjs'
import { fontAttributes, stepColor } from './definition'
import { useContext, useEffect } from 'react'
import { MasterContext } from '../JointJs'

function createStep(x: number, y: number, text: string = 'Step') {
	return new shapes.standard.Rectangle({
		position: { x, y },
		size: { width: 100, height: 60 },
		z: 1,
		attrs: {
			label: {
				...fontAttributes,
				text,
				textWrap: {
					width: -10,
					height: -10,
				},
			},
			body: {
				fill: stepColor,
				stroke: 'none',
			},
		},
	})
}

function StepNode({ x, y, text }: { x: number; y: number; text?: string }) {
	const masterContext = useContext(MasterContext)
	useEffect(() => {
		masterContext.graph.addCell(createStep(x, y, text))
	}, [])

	return <></>
}

export default StepNode
