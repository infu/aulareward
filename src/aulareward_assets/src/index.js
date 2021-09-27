import { aulareward } from "../../declarations/aulareward";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const max = parseInt( document.getElementById("max").value, 10);
  // Interact with aulareward actor, calling the greet method
  const random = await aulareward.run(max);

  document.getElementById("random").innerText = random;
});
