import { createContext, useContext, useEffect, useRef, useState } from 'react'

import { dia, shapes } from 'jointjs'

const graph: dia.Graph = new dia.Graph({}, { cellNamespace: shapes })
const paper: dia.Paper = new dia.Paper({
	model: graph,
	cellViewNamespace: shapes,
	width: '100%',
	height: '100%',
	async: true,
	sorting: dia.Paper.sorting.APPROX,
	background: { color: '#F3F7F6' },
	snapLabels: true,
	interactive: {
		linkMove: false,
	},
	defaultConnectionPoint: { name: 'boundary' },
	defaultRouter: { name: 'orthogonal', args: { padding: 5 } },
} as dia.Paper.Options)

export const MasterContext = createContext({
	graph,
	paper,
})

function JointJs(props: { children: JSX.Element | JSX.Element[] }) {
	const masterContext = useContext(MasterContext)
	const paperPlaceHolder = useRef<HTMLInputElement>()

	//! init the paper and graph
	useEffect(() => {
		// @ts-ignore
		paperPlaceHolder.current.appendChild(paper.el)
	}, [])
	return (
		<MasterContext.Provider value={masterContext}>
			<div ref={paperPlaceHolder as React.MutableRefObject<HTMLInputElement>} />
			{props.children}
		</MasterContext.Provider>
	)
}

export default JointJs
