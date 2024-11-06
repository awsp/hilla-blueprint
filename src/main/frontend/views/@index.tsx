import {Button, Tab, Tabs, TabsExpander} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import {AngularPanel} from "Frontend/views/AngularPanel";
import {EmberPanel} from "Frontend/views/EmberPanel";
import {ReactPanel} from "Frontend/views/ReactPanel";

export default function HomeView() {

  function incrementCounter() {

  }

  return (
      <div>
        <h1>Welcome to your new blueprint application</h1>
        <section style={{padding: "20px"}}>
          <Button intent="primary" text="button content" onClick={incrementCounter}/>
          <Tabs id="TabsExample">
            <Tab id="ng" title="Angular" panel={<AngularPanel/>}/>
            <Tab id="mb" title="Ember" panel={<EmberPanel/>} panelClassName="ember-panel"/>
            <Tab id="rx" title="React" panel={<ReactPanel/>}/>
            <TabsExpander/>
            <input className="bp5-input" type="text" placeholder="Search..."/>
          </Tabs>
        </section>
      </div>
  );
}

