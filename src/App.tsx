import { Center } from "@chakra-ui/react";
import GameHistory from "pages/GameHistory";
import GameSelect from "pages/GameSelect";
import Home from "pages/Home";
import Sudoku from "pages/Sudoku";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Center w="100vw" h="100vh">
			<Router>
				<Switch>
					<Route path="/sudoku" exact>
						<GameSelect />
					</Route>
					<Route path="/sudoku/:id" exact>
						<Sudoku />
					</Route>
					<Route path="/history">
						<GameHistory />
					</Route>

					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</Center>
	);
}

export default App;
