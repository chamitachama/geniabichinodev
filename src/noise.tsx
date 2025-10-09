function noise(x: number, y: number, t: number): number {
    return Math.sin(x * 0.05 + t) + Math.cos(y * 0.05 + t);
  }
  
  window.onload = () => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    let t = 0;
  
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      for (let x = 0; x < canvas.width; x += 30) {
        for (let y = 0; y < canvas.height; y += 30) {
          let a = noise(x, y, t) * 10;
          let b = noise(y, x, t) * 5;
          let size = 5 + Math.abs(a + b);
  
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `hsl(${(a + b) * 20}, 70%, 50%)`;
          ctx.fill();
        }
      }
  
      t += 0.05;
      requestAnimationFrame(draw);
    }
  
    draw();
  };
  