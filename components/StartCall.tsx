import { useVoice } from "@humeai/voice-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { Vortex } from "@/components/ui/vortex"; // Make sure to import your Vortex component correctly

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
                The hell is EVI ?
              </h2>
              <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                EVI stands for Empathetic Voice Interface. In a world full of
                noise, Peter is the quiet voice that listens. Peter talks to you like
                a real friend, navigating through the emotions of human life.
                Peter has real world data access and can use the internet to
                respond to factual questions.
              </p>
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
