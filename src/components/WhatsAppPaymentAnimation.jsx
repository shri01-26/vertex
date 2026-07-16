import React, { useRef } from "react";
import { motion, useAnimation, useInView, useReducedMotion } from "framer-motion";

// ---------------------------------------------------------------------------
// Asset paths — replace these with your actual asset locations if different.
// ---------------------------------------------------------------------------
const ASSETS = {
  phone: "/assets/payment-animation/phone-whatsapp.png", // Step 1
  man: "/assets/payment-animation/man-using-phone.png", // Step 2
  cartMessage: "/assets/payment-animation/cart-message.png", // Step 3
  orderSummary: "/assets/payment-animation/order-summary.png", // Step 4
  paymentRequest: "/assets/payment-animation/payment-request.png", // Step 5
  paymentMethods: "/assets/payment-animation/payment-methods.png", // Step 6
  paymentSuccess: "/assets/payment-animation/payment-success.png", // Step 7
};

const EASE = [0.22, 1, 0.36, 1];

// Entrance variants per element. Delays are relative to the container's
// "show" trigger (staggerChildren handles the 400ms-style offsets via
// explicit delay values below instead, since each step has a bespoke delay).
const phoneVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 24 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: 0 },
  },
};

const manVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: 0.4 },
  },
};

const cartMessageVariants = {
  hidden: { opacity: 0, scale: 0.85, x: 40 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { type: "spring", stiffness: 220, damping: 18, delay: 1.0 },
  },
};

const orderSummaryVariants = {
  hidden: { opacity: 0, x: -50, rotate: -4 },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.6, ease: EASE, delay: 1.35 },
  },
};

const paymentRequestVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 16, delay: 1.7 },
  },
};

const paymentMethodsVariants = {
  hidden: { opacity: 0, x: -70 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE, delay: 2.05 },
  },
};

const paymentSuccessVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 240, damping: 14, delay: 2.4 },
  },
};

// Gentle continuous float applied once the entrance animation settles.
// Each card floats at a slightly different speed/amplitude so the
// composition doesn't move in unison.
const floatLoop = (duration, distance = 8, delay = 0) => ({
  y: [0, -distance, 0],
  transition: {
    duration,
    delay,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
  },
});

export default function WhatsAppPaymentAnimation() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.35 });
  const prefersReducedMotion = useReducedMotion();

  const controls = useAnimation();
  const floatControls = useAnimation();

  React.useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      // Skip straight to the final state, no motion.
      controls.set("show");
      return;
    }

    controls.start("show").then(() => {
      // Kick off the idle floating loop only after entrance settles.
      floatControls.start("float");
    });
  }, [isInView, prefersReducedMotion, controls, floatControls]);

  const initialState = prefersReducedMotion ? "show" : "hidden";

  return (
    <section className="relative w-full bg-transparent px-4 py-12 sm:px-8">
      <div
        ref={containerRef}
        className="relative mx-auto h-[440px] w-full max-w-[380px] scale-[0.62] xs:scale-75 sm:h-[560px] sm:max-w-[560px] sm:scale-90 md:h-[640px] md:max-w-[660px] md:scale-100 lg:h-[720px] lg:w-[760px] lg:max-w-[760px]"
      >
        {/* Step 1: WhatsApp phone mockup — anchor of the whole composition */}
        <motion.img
          src={ASSETS.phone} // replace with your phone mockup asset
          alt="WhatsApp Pay chat on phone"
          initial={initialState}
          animate={controls}
          variants={phoneVariants}
          className="absolute right-0 top-0 z-10 h-[88%] w-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.18)]"
          draggable={false}
        />

        {/* Step 2: Man using phone — sits in front of the phone's bottom-left */}
        <motion.div
          initial={initialState}
          animate={controls}
          variants={manVariants}
          className="absolute bottom-0 left-0 z-20 w-[58%] sm:w-[52%]"
        >
          <motion.img
            src={ASSETS.man} // replace with your person/photo asset
            alt="Man completing a WhatsApp payment"
            animate={!prefersReducedMotion ? floatControls : undefined}
            variants={{ float: floatLoop(4.5, 6, 0) }}
            className="h-auto w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.16)]"
            draggable={false}
          />
        </motion.div>

        {/* Step 3: Cart / order message — top-right of the phone */}
        <motion.div
          initial={initialState}
          animate={controls}
          variants={cartMessageVariants}
          className="absolute right-[2%] top-[6%] z-30 w-[46%] sm:w-[40%]"
        >
          <motion.img
            src={ASSETS.cartMessage} // replace with your cart/order message asset
            alt="Cart order message bubble"
            animate={!prefersReducedMotion ? floatControls : undefined}
            variants={{ float: floatLoop(3.6, 7, 0.1) }}
            className="h-auto w-full object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.14)]"
            draggable={false}
          />
        </motion.div>

        {/* Step 4: Order summary card — left-middle */}
        <motion.div
          initial={initialState}
          animate={controls}
          variants={orderSummaryVariants}
          className="absolute left-0 top-[30%] z-30 w-[46%] sm:w-[40%]"
        >
          <motion.img
            src={ASSETS.orderSummary} // replace with your order summary card asset
            alt="Order summary card"
            animate={!prefersReducedMotion ? floatControls : undefined}
            variants={{ float: floatLoop(4.2, 6, 0.2) }}
            className="h-auto w-full object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.14)]"
            draggable={false}
          />
        </motion.div>

        {/* Step 5: Payment request card — centered, overlapping the phone */}
        <motion.div
          initial={initialState}
          animate={controls}
          variants={paymentRequestVariants}
          className="absolute left-1/2 top-[42%] z-40 w-[48%] -translate-x-1/2 sm:w-[42%]"
        >
          <motion.img
            src={ASSETS.paymentRequest} // replace with your payment request card asset
            alt="Payment request card"
            animate={!prefersReducedMotion ? floatControls : undefined}
            variants={{ float: floatLoop(3.9, 5, 0.3) }}
            className="h-auto w-full object-contain drop-shadow-[0_18px_32px_rgba(0,0,0,0.16)]"
            draggable={false}
          />
        </motion.div>

        {/* Step 6: Payment methods card — far left */}
        <motion.div
          initial={initialState}
          animate={controls}
          variants={paymentMethodsVariants}
          className="absolute bottom-[8%] left-[-2%] z-30 w-[42%] sm:w-[36%]"
        >
          <motion.img
            src={ASSETS.paymentMethods} // replace with your payment methods card asset
            alt="Payment methods selection card"
            animate={!prefersReducedMotion ? floatControls : undefined}
            variants={{ float: floatLoop(4.8, 6, 0.4) }}
            className="h-auto w-full object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.14)]"
            draggable={false}
          />
        </motion.div>

        {/* Step 7: Payment success card — lower-right, with pulsing check */}
        <motion.div
          initial={initialState}
          animate={controls}
          variants={paymentSuccessVariants}
          className="absolute bottom-[2%] right-[-2%] z-40 w-[46%] sm:w-[40%]"
        >
          <motion.div
            animate={!prefersReducedMotion ? floatControls : undefined}
            variants={{ float: floatLoop(3.4, 8, 0.5) }}
            className="relative"
          >
            <img
              src={ASSETS.paymentSuccess} // replace with your payment success card asset
              alt="Payment successful confirmation"
              className="h-auto w-full object-contain drop-shadow-[0_18px_32px_rgba(0,0,0,0.16)]"
              draggable={false}
            />

            {/* Small pulse ring layered over the card's green check icon.
                Positioned as a rough overlay — nudge top/left % to match
                the exact check-icon position in your payment-success.png. */}
            {!prefersReducedMotion && (
              <motion.span
                aria-hidden="true"
                className="absolute left-[18%] top-[22%] h-[14%] w-[14%] rounded-full bg-emerald-400/60"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 2.6,
                }}
              />
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
