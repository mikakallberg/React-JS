import './App.css';
import MethodsAsPropsParents from './components/MethodsAsPropsParents';
// import NestingComponents from './components/NestingComponents';
// import ConditionalRenderingClass from './components/ConditionalRenderingClass';
// import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
// import EventBindings from './components/EventBinding';
// import EventsClass from './components/EventsClass';
// import EventsFunctional from './components/EventsFunctional';
// import FunctionalGreetingWitProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <MethodsAsPropsParents/>
      {/* <NestingComponents/> */}
      {/* <ConditionalRenderingClass/>
      <ConditionalRenderingFunctional connected={true}/> */}
      {/* <EventBindings/> */}
      {/* <EventsFunctional/>
      <EventsClass/> */}
      {/* <FunctionalGreetingWitProps greeting="nice to meet you!" name="Mike" age="32" />
      <StatefulGreeting greeting="I'm a stateful class component!" name="Lars"/> */}
    </div>
  );
}

export default App;
