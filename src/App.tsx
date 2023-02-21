import './App.css'
import JointJs from './components/JointJs'
import StartNode from './components/nodes/StartNode'

function App() {
	return (
		<div className="App">
			<h1>JointJsReact</h1>
			<JointJs>
				<StartNode x={10} y={10} />
			</JointJs>
		</div>
	)
}

export default App
