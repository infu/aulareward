import { aulareward } from "../../declarations/aulareward";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with aulareward actor, calling the greet method
  const greeting = await aulareward.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
