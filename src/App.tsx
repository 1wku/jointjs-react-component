import './App.css'
import JointJs from './components/JointJs'
import StartNode from './components/nodes/StartNode'
import StepNode from './components/nodes/Step'

function App() {
	return (
		<div className="App">
			<h1>JointJsReact</h1>
			<JointJs>
				<StepNode x={10} y={10} />
				<StepNode x={10} y={10} text="Task a" />
				<StartNode x={10} y={10} />
			</JointJs>
		</div>
	)
}

export default App
