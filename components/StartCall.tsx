import { useVoice } from "@humeai/voice-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import { LogInIcon, Phone } from "lucide-react";
import { Vortex } from "@/components/ui/vortex"; // Make sure to import your Vortex component correctly
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function StartCall() {
  const { status, connect } = useVoice();

  return (
    <AnimatePresence>
      {status.value !== "connected" ? (
        <div className="w-screen mx-auto rounded-md h-screen overflow-hidden">
          <motion.div
            className={
              "fixed inset-0 p-4 flex items-center justify-center bg-background"
            }
            initial="initial"
            animate="enter"
            exit="exit"
            variants={{
              initial: { opacity: 0 },
              enter: { opacity: 1 },
              exit: { opacity: 0 },
            }}
          >
            <Vortex
              backgroundColor="black"
              rangeY={800}
              particleCount={500}
              className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
              <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                Who is Peter ?
              </h2>
              <p className="text-white text-sm md:text-2xl max-w-4xl mt-6 text-center">
                Introducing Peter: Your friendly conversational companion. In a
                noisy world, Peter is your calming voice, ready to chat like a
                true friend, guiding you through life's emotional landscape.
                Equipped with cutting-edge sentiment analysis, Peter truly
                understands your emotions through your voice. With access to
                real-world data and internet smarts, Peter is always here to
                answer your questions.
              </p>
              <SignedIn>
                <Button
                  className={"z-50 flex items-center gap-1.5 m-10"}
                  onClick={() => {
                    connect()
                      .then(() => {})
                      .catch(() => {})
                      .finally(() => {});
                  }}
                >
                  <span>
                    <Phone
                      className={"size-4 opacity-50"}
                      strokeWidth={2}
                      stroke={"currentColor"}
                    />
                  </span>
                  <span>Start Call</span>
                </Button>
              </SignedIn>
              <SignedOut>
                <SignInButton>
                  <Button className={"z-50 flex items-center gap-1.5 m-10"}>
                    <span>
                      <LogInIcon
                        className={"size-4 opacity-50"}
                        strokeWidth={2}
                        stroke={"currentColor"}
                      />
                    </span>
                    <span>Sign In to Start</span>
                  </Button>
                </SignInButton>
              </SignedOut>
            </Vortex>
            <AnimatePresence>
              <motion.div
                variants={{
                  initial: { scale: 0.5 },
                  enter: { scale: 1 },
                  exit: { scale: 0.5 },
                }}
              ></motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
