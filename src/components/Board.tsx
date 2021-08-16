import { useEffect } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";

type Param = {
	id: string;
};

export default function Board() {
	const { id } = useParams<Param>();
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const canvasSize = (3 * window.innerHeight) / 4;

	useEffect(() => {
		if (!canvasRef.current) return;
		const ctx = canvasRef.current.getContext("2d");
		if (!ctx) return;
		ctx.fillRect(0, 0, canvasSize, canvasSize);
	}, [canvasSize]);

	return <canvas ref={canvasRef} width={canvasSize} height={canvasSize} />;
}
