import { Button } from '@enterprise-example/shared/ui/button';

export function NxWelcome({ title }: { title: string }) {
  return (
    <div className="wrapper">
      <div className="container">
        <div id="welcome">
          <h1>
            <span> Hello there, </span>
            Welcome {title} 👋
          </h1>
        </div>

        <Button>Shared button</Button>
      </div>
    </div>
  );
}

export default NxWelcome;
