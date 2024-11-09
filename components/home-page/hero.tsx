// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";

// Asset imports
import Placeholder from "@/public/placeholder.webp";
import CodeExample from "./code-example";
import PackageExample from "./pack-example";
import Sample from "./sample";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div>
          <Button
            asChild
            className="mb-6 w-fit"
            size={"sm"}
            variant={"outline"}
          >
            <Link className="not-prose" href="https://www.npmjs.com/package/@pvs-package/fetch-data">
              npm i @pvs-package/fetch-data <ArrowRight className="w-4" />
            </Link>
          </Button>
          <h1>
            <Balancer>
              Data fetching hook
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Balancer>
          </h3>
          <h3 className="text-muted-foreground">
            <Sample />
          </h3>
          <h3 className="text-muted-foreground">
            <CodeExample />
          </h3>
          <h3 className="text-muted-foreground">
            <PackageExample />
          </h3>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
