//const canvas_loading = document.getElementById("canvas_loading");
const canvas = document.getElementById("canvas");
const canvas_button_1 = document.getElementById("canvas_button_1");
const canvas_button_2 = document.getElementById("canvas_button_2");
const canvas_arrow_line = document.getElementById("canvas_arrow_line");
const canvas_after_effects = document.getElementById("canvas_after_effects");
const canvas_figma = document.getElementById("canvas_figma");
const canvas_rive = document.getElementById("canvas_rive");
const canvas_ai = document.getElementById("canvas_ai");
const canvas_ps = document.getElementById("canvas_ps");
const canvas_blender = document.getElementById("canvas_blender");
const canvas_numbers = document.getElementById("canvas_numbers");
const canvas_ad = document.getElementById("canvas_ad");
const canvas_skills = document.getElementById("canvas_skills");
const canvas_my_computer = document.getElementById("canvas_my_computer");
const canvas_envelope = document.getElementById("canvas_envelope");
const square = document.querySelector(".sticky-square");
const loader = document.querySelector(".loader");
const category = document.querySelectorAll(".category");
const category_last = document.querySelectorAll(".category_last");

// const r18 = new rive.Rive({
//   src: "sym.riv",
//   canvas: canvas_loading,
//   autoplay: true,
//   stateMachines: "State Machine 1",
//   artboard: "loading_screen",

//   // artboard: "body sym", // State machine name from the Rive file
//   onLoad: () => {
//     //resizeCanvas();
//     console.log("Rive file loaded successfully");
//   },
// });

gsap.registerPlugin(ScrollTrigger);
const cards = gsap.utils.toArray(".card_new");

cards.forEach((card_new, i) => {
  gsap.to(card_new, {
    y: `${-i * -80}`, // Leaves visible title space
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: "#stack",
      start: () => `top+=${i * window.innerHeight * 0.5} top`,
      end: () => `top+=${(i + 1) * window.innerHeight * 0.5} top`,
      scrub: true,
    },
  });
});

category.forEach((category) => {
  category.addEventListener("click", () => {
    category.classList.toggle("active");
  });
});

category_last.forEach((category_last) => {
  category_last.addEventListener("click", () => {
    category_last.classList.toggle("active");
  });
});
// Create a Rive instance and load a Rive file
// For this example, we're using a sample animation from Rive's CDN

// Initialize Rive
const r = new rive.Rive({
  src: "sym.riv",
  canvas: canvas,
  autoplay: false,
  stateMachines: "SM_sym",
  artboard: "body sym",

  // artboard: "body sym", // State machine name from the Rive file
  onLoad: () => {
    //resizeCanvas();
    console.log("Rive file loaded successfully");
  },
});

// const startRive_1 = () => {
//   if (!r) {
//   } else {
//     r.play();
//   }
// };

// const pauseRive_1 = () => {
//   if (r) {
//     r.pause();
//   }
// };

// const observer_1 = new IntersectionObserver(
//   ([entry]) => {
//     if (entry.isIntersecting) {
//       startRive_1();
//     } else {
//       pauseRive_1();
//     }
//   },
//   {
//     threshold: 0.5,
//   }
// );
//observer_1.observe(canvas);

const r1 = new rive.Rive({
  src: "sym.riv",
  canvas: canvas_button_2,
  autoplay: true,
  stateMachines: "State Machine 1",
  artboard: "arrow_button",

  // artboard: "body sym", // State machine name from the Rive file
  onLoad: () => {
    //resizeCanvas();
    console.log("Rive file loaded successfully");
  },
});

const r2 = new rive.Rive({
  src: "sym.riv",
  canvas: canvas_button_1,
  autoplay: true,
  stateMachines: "SM_button_1",
  artboard: "button_1",

  // artboard: "body sym", // State machine name from the Rive file
  onLoad: () => {
    //resizeCanvas();
    console.log("Rive file loaded successfully");
  },
});

/*
Layouts

let widthNumImput;

function updateCanvasHeight() {
  const browserWidth = window.innerWidth;
  const widthDisplay = document.getElementById('container_2');

  widthDisplay.innerText = browserWidth + ' px';

  // Update Rive input if available
  if (widthNumInput) {
      widthNumInput.value = browserWidth;
  }

  if (browserWidth >= 1228) {
    canvas_arrow_line.style.width = '1920px'; // wide height
} else {
    canvas_arrow_line.style.width = '767px'; // skinny height
}

  // Ensure Rive redraws on canvas resize
  if (riveInstance) {
      riveInstance.resizeDrawingSurfaceToCanvas();
  }
}
*/

const r3 = new rive.Rive({
  src: "sym.riv",
  canvas: canvas_arrow_line,
  autoplay: true,
  stateMachines: "SM_arrow_line",
  artboard: "arrow_bar",

  // artboard: "body sym", // State machine name from the Rive file
  onLoad: () => {
    //const inputs = r3.stateMachineInputs('SM_arrow_line');
    //widthNumImput = inputs.find(i => i.name === "width num");
    r3.resizeDrawingSurfaceToCanvas();
    //updateCanvasHeight()
    console.log("Rive file loaded successfully");
  },
});

const r4 = new rive.Rive({
  src: "sym.riv",
  canvas: canvas_after_effects,
  autoplay: true,
  stateMachines: "State Machine 1",
  artboard: "after_effects 2",

  // artboard: "body sym", // State machine name from the Rive file
  onLoad: () => {
    //const inputs = r3.stateMachineInputs('SM_arrow_line');
    //widthNumImput = inputs.find(i => i.name === "width num");
    r3.resizeDrawingSurfaceToCanvas();
    //updateCanvasHeight()
    console.log("Rive file loaded successfully");
  },
});

const r5 = new rive.Rive({
  src: "sym.riv",
  canvas: canvas_figma,
  autoplay: true,
  stateMachines: "State Machine 1",
  artboard: "figma 2",

  // artboard: "body sym", // State machine name from the Rive file
  onLoad: () => {
    //const inputs = r3.stateMachineInputs('SM_arrow_line');
    //widthNumImput = inputs.find(i => i.name === "width num");
    r3.resizeDrawingSurfaceToCanvas();
    //updateCanvasHeight()
    console.log("Rive file loaded successfully");
  },
});

const r6 = new rive.Rive({
  src: "sym.riv",
  canvas: canvas_rive,
  autoplay: true,
  stateMachines: "State Machine 1",
  artboard: "rive",

  // artboard: "body sym", // State machine name from the Rive file
  onLoad: () => {
    //const inputs = r3.stateMachineInputs('SM_arrow_line');
    //widthNumImput = inputs.find(i => i.name === "width num");
    r3.resizeDrawingSurfaceToCanvas();
    //updateCanvasHeight()
    console.log("Rive file loaded successfully");
  },
});
const r7 = new rive.Rive({
  src: "sym.riv",
  canvas: canvas_ai,
  autoplay: true,
  stateMachines: "State Machine 1",
  artboard: "illustrator",

  // artboard: "body sym", // State machine name from the Rive file
  onLoad: () => {
    //const inputs = r3.stateMachineInputs('SM_arrow_line');
    //widthNumImput = inputs.find(i => i.name === "width num");
    r3.resizeDrawingSurfaceToCanvas();
    //updateCanvasHeight()
    console.log("Rive file loaded successfully");
  },
});
const r8 = new rive.Rive({
  src: "sym.riv",
  canvas: canvas_ps,
  autoplay: true,
  stateMachines: "State Machine 1",
  artboard: "photoshop",

  // artboard: "body sym", // State machine name from the Rive file
  onLoad: () => {
    //const inputs = r3.stateMachineInputs('SM_arrow_line');
    //widthNumImput = inputs.find(i => i.name === "width num");
    r3.resizeDrawingSurfaceToCanvas();
    //updateCanvasHeight()
    console.log("Rive file loaded successfully");
  },
});
const r9 = new rive.Rive({
  src: "sym.riv",
  canvas: canvas_blender,
  autoplay: true,
  stateMachines: "State Machine 1",
  artboard: "blender",

  // artboard: "body sym", // State machine name from the Rive file
  onLoad: () => {
    //const inputs = r3.stateMachineInputs('SM_arrow_line');
    //widthNumImput = inputs.find(i => i.name === "width num");
    r3.resizeDrawingSurfaceToCanvas();
    //updateCanvasHeight()
    console.log("Rive file loaded successfully");
  },
});

let r11;
/*r11 = new rive.Rive({
  src: "sym.riv",
  canvas: canvas_hours,
  autoplay: true,
  stateMachines: "State Machine 1",
  artboard: "hours",

  // artboard: "body sym", // State machine name from the Rive file
  onLoad: () => {
    //const inputs = r3.stateMachineInputs('SM_arrow_line');
    //widthNumImput = inputs.find(i => i.name === "width num");
    r3.resizeDrawingSurfaceToCanvas();
    //updateCanvasHeight()
    console.log("Rive file loaded successfully");
  },
});*/

r11 = new rive.Rive({
  src: "sym.riv", // Replace with your Rive file path
  canvas: canvas_numbers,
  autoplay: false, // Initially paused
  stateMachines: "State Machine 1", // Replace with your state machine if needed
  artboard: "numbers",
  onLoad: () => {
    console.log("Rive loaded");
  },
});

const startRive = () => {
  if (!r11) {
  } else {
    r11.play();
  }
};

const pauseRive = () => {
  if (r11) {
    r11.pause();
  }
};

// Use Intersection Observer to detect visibility
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      startRive();
    } else {
      pauseRive();
    }
  },
  {
    threshold: 0.5, // Adjust as needed
  }
);

observer.observe(canvas_numbers);

const r14 = new rive.Rive({
  src: "sym.riv",
  canvas: canvas_ad,
  autoplay: true,
  stateMachines: "State Machine 1",
  artboard: "bar",

  // artboard: "body sym", // State machine name from the Rive file
  onLoad: () => {
    //const inputs = r3.stateMachineInputs('SM_arrow_line');
    //widthNumImput = inputs.find(i => i.name === "width num");
    r3.resizeDrawingSurfaceToCanvas();
    //updateCanvasHeight()
    console.log("Rive file loaded successfully");
  },
});

const r15 = new rive.Rive({
  src: "sym.riv",
  canvas: canvas_skills,
  autoplay: true,
  stateMachines: "State Machine 1",
  artboard: "skills_section",

  // artboard: "body sym", // State machine name from the Rive file
  onLoad: () => {
    //const inputs = r3.stateMachineInputs('SM_arrow_line');
    //widthNumImput = inputs.find(i => i.name === "width num");
    r3.resizeDrawingSurfaceToCanvas();
    //updateCanvasHeight()
    console.log("Rive file loaded successfully");
  },
});

const r17 = new rive.Rive({
  src: "sym.riv",
  canvas: canvas_my_computer,
  autoplay: true,
  stateMachines: "State Machine 1",
  artboard: "my_computer",

  // artboard: "body sym", // State machine name from the Rive file
  onLoad: () => {
    //const inputs = r3.stateMachineInputs('SM_arrow_line');
    //widthNumImput = inputs.find(i => i.name === "width num");
    r3.resizeDrawingSurfaceToCanvas();
    //updateCanvasHeight()
    console.log("Rive file loaded successfully");
  },
});

const r16 = new rive.Rive({
  src: "sym.riv",
  canvas: canvas_envelope,
  autoplay: true,
  stateMachines: " SM_envelope",
  artboard: "contact_section_hover",

  // artboard: "body sym", // State machine name from the Rive file
  onLoad: () => {
    //const inputs = r3.stateMachineInputs('SM_arrow_line');
    //widthNumImput = inputs.find(i => i.name === "width num");
    r3.resizeDrawingSurfaceToCanvas();
    //updateCanvasHeight()
    // loader.classList.add("loader-hidden");

    //const loader = document.querySelector(".loader");
    setTimeout(() => {
      loader.classList.add("loader-hidden");

      loader.addEventListener("transitioned", () => {
        document.body.removeChild("loader");
      });
      console.log("2s");
      r.play();
    }, 2000);

    console.log("Rive file loaded successfully");
  },
});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("header-scrolled");
  } else if (window.scrollY <= 50) {
    header.classList.remove("header-scrolled");
  }
});
