import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import paths from "@/paths";
import { Leaf } from "lucide-react";
import Link from "next/link";

function CancelledPage() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center">
      <Card className="w-[350px]">
        <div className="p-6">
          <div className="w-full flex justify-center">
            <Leaf className="w-12 h-12 rounded-full bg-teal-500/30 text-teal-500 p-2" />
          </div>

          <div className="mt-3 text-center sm:mt-5 w-full">
            <h3 className="text-lg leading-6 font-medium">Payment Success!</h3>

            <div className="mt-2 items-center justify-center flex">
              <p className="text-sm text-muted-foreground w-[15rem]">
                You just went premium. Please enjoy all the features of
                Memotion.
              </p>
            </div>

            <div className="mt-5 sm:mt-6 w-full">
              <Button className="w-full" asChild>
                <Link href={paths.life()}>Enjoy.</Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CancelledPage;
