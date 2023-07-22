"use client";
import { useEffect, useRef } from "react";
import {
  child,
  getDatabase,
  onValue,
  push,
  ref,
  runTransaction,
} from "firebase/database";
import { app } from "@/services/Firebase";

interface Status {
  life: number;
}

interface Token {
  player: string;
  status: Status;
  x: number;
  y: number;
  imageUrl: string;
  imageElement?: HTMLImageElement;
  refId?: string;
}

interface Tokens {
  [key: string]: Token;
}

interface Room {
  tokens: Tokens;
}

export default function Game({
  params: { room },
}: {
  params: { room: string };
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousepos = { x: 0, y: 0 };
  let tokens: Tokens = {};

  const db = getDatabase(app);
  const roomRef = ref(db, `/rooms/${room}`);
  const tokensRef = child(roomRef, "/tokens");
  const PlayerID = "victor";
  let selected = {
    offsetX: 0,
    offsetY: 0,
    id: "",
    imageElement: undefined as HTMLImageElement | undefined,
  };

  function updateMouseMove(e: MouseEvent) {
    mousepos.x = e.clientX;
    mousepos.y = e.clientY;
  }

  function addPlayerToken(token: Token) {
    // runTransaction(roomRef, (room: Room) => {
    //   console.log(room);
    //   if (!room) {
    //     return room;
    //   }

    //   if (!room.tokens) {
    //     room.tokens = [token];
    //     return room;
    //   }
    //   room.tokens.push(token);
    //   return room;
    // });

    const tokenRef = push(tokensRef, token);
    console.log(tokenRef);
  }

  useEffect(() => {
    const playerToken = {
      x: 0,
      y: 0,
      status: { life: 10 },
      player: PlayerID,
      imageUrl: "https://i.imgur.com/jKlYbA5.png",
    };

    const canvas = canvasRef.current;
    if (!canvas) return;

    document.addEventListener("mousemove", updateMouseMove);

    onValue(roomRef, (snapshot) => {
      console.log("sala mudou: ", snapshot.val());
      let room: Room = snapshot.val();
      console.log(room);
      if (!room || !room.tokens) return;
      tokens = Object.fromEntries(
        Object.entries(room.tokens).map(([tokenId, token]) => {
          const tokenImg = new Image();
          tokenImg.onload = () => {};
          tokenImg.src = "https://i.imgur.com/jKlYbA5.png";

          token.imageElement = tokenImg;
          canvas.addEventListener("mousedown", (e) => {
            console.log("cX", e.clientX);
            console.log("X", token.x);
            console.log("cY", e.clientY);
            console.log("Y", token.y);
            if (
              e.clientX > token.x &&
              e.clientX < token.x + 150 &&
              e.clientY > token.y &&
              e.clientY < token.y + 150
            ) {
              selected.id = tokenId;
              selected.offsetX = e.clientX - token.x;
              selected.offsetY = e.clientY - token.y;
              selected.imageElement = tokenImg;
            }
          });

          canvas.addEventListener("mouseup", (e) => {
            if (selected.id === tokenId) {
              moveToken(
                tokenId,
                e.clientX - selected.offsetX,
                e.clientY - selected.offsetY
              );
              selected.id = "";
            }
          });

          return [tokenId, token];
        })
      );
    });
    render();
  }, []);

  function render() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    Object.entries(tokens).forEach(([tokenId, token]) => {
      ctx.drawImage(token.imageElement!, token.x, token.y, 150, 150);
    });

    Object.entries(tokens).forEach(([tokenId, token]) => {
      if (selected.id === tokenId) {
        ctx.globalAlpha = 0.5;
        ctx.drawImage(
          token.imageElement!,
          mousepos.x - selected.offsetX,
          mousepos.y - selected.offsetY,
          150,
          150
        );
        ctx.globalAlpha = 1;
      }
    });
    requestAnimationFrame(render);
  }

  function moveToken(id: string, x: number, y: number) {
    runTransaction(roomRef, (room: Room) => {
      const token = Object.entries(room.tokens).find(
        ([tokenId, token]) => tokenId === id
      );
      if (!token) return room;

      token[1].x = x;
      token[1].y = y;
      return room;
    });
  }

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      {/* <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        onNodesChange={onNodesChange}
      >
        <Background color="transparent" />
        <Controls />
      </ReactFlow> */}
      <canvas
        style={{ width: "100vw", height: "100vh" }}
        ref={canvasRef}
      ></canvas>
    </div>
  );
}
