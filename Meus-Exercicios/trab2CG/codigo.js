let area, gl;
let atributo_posicao;
let modelo_vao;
// "ponteiro" para nossa variável uniform lá no shader
let uniform_a;
let uniform_b;
let uniform_c;
let uniform_d;
function cria_contexto() {
 area = document.getElementById("area");
 gl = area.getContext("webgl2");
}
function new_shader(id) {
 let shader_script = document.getElementById(id);
 if (!shader_script) return null;
 let str = shader_script.innerText.trim();
 let shader;
 if (shader_script.type == "fragment-shader")
 shader = gl.createShader(gl.FRAGMENT_SHADER);
 else if (shader_script.type == "vertex-shader")
 shader = gl.createShader(gl.VERTEX_SHADER);
 else return null;
 gl.shaderSource(shader, str);
 gl.compileShader(shader);
 if (!gl.getShaderParameter(shader,gl.COMPILE_STATUS)){
 alert("Erro no " + shader_script.type + ": \n" +
 gl.getShaderInfoLog(shader)
 );
 return null;
 }
 return shader;
}
function cria_shaders() {
 let frag_shader = new_shader("meu_fragment_shader");
 if (!frag_shader) return false;
 let vert_shader = new_shader("meu_vertex_shader");
 if (!vert_shader) return false;
 let shader_prog = gl.createProgram();
 gl.attachShader(shader_prog, vert_shader);
 gl.attachShader(shader_prog, frag_shader);
 gl.linkProgram(shader_prog);
 if (!gl.getProgramParameter(shader_prog,
 gl.LINK_STATUS)) {
 alert("Erro ao gerar o shader program");
 return false;
 }
 atributo_posicao = gl.getAttribLocation(shader_prog,
 "in_posicao");
 // obtendo o "ponteiro" da nossa variável uniform
 // lá do shader
 uniform_a = gl.getUniformLocation(shader_prog, "a");
 uniform_b = gl.getUniformLocation(shader_prog, "b");
 uniform_c = gl.getUniformLocation(shader_prog, "c");
 uniform_d = gl.getUniformLocation(shader_prog, "d");
 gl.useProgram(shader_prog);
 return true;
}
function cria_modelos() {
 // 1 - cria buffer dos vértices (VBO)
 //
 let buffer_vertices = gl.createBuffer();
 gl.bindBuffer(gl.ARRAY_BUFFER, buffer_vertices);
 let modelo_dados = [
 // posicao x,y,z
 0.0, 0.0, 0.0,
 1.0, 0.0, 0.0,
 1.0, 1.0, 0.0
 ];
 gl.bufferData(gl.ARRAY_BUFFER,
 new Float32Array(modelo_dados), gl.STATIC_DRAW);
 // 2 - cria o pacote com as especificações dos
 // dados (VAO)
 //
 modelo_vao = gl.createVertexArray();
 gl.bindVertexArray(modelo_vao);
 let tamanho_float = 4;
 let tamanho_vertice = 3 * tamanho_float;
 let offset_posicao = 0;
 gl.enableVertexAttribArray(atributo_posicao);
 gl.vertexAttribPointer(atributo_posicao,
 3, gl.FLOAT, false, tamanho_vertice,
 offset_posicao);
 gl.bindVertexArray(null);
 return true;
}
function configura() {
 gl.viewport(0, 0,
 gl.drawingBufferWidth,
 gl.drawingBufferHeight );
 gl.enable(gl.DEPTH_TEST);
 gl.enable(gl.CULL_FACE);
 gl.clearColor(0.0, 0.0, 0.0, 1.0);
}
function renderiza() {
 gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
 // alterando nossa variável uniform lá no shader
 // com o valor que quisermos aqui
 //

let valor = parseFloat(
    document.querySelector('#a').value);
    gl.uniform1f( uniform_a, valor );
        console.log(valor);
let valorB = parseFloat(
    document.querySelector('#b').value);
    gl.uniform1f( uniform_b, valorB );
        console.log(valorB);

let valorC =parseFloat(
    document.querySelector('#c').value);
    gl.uniform1f(uniform_c, valorC);
    console.log(valorC);
let valorD = parseFloat(
    document.querySelector('#d').value);
    gl.uniform1f(uniform_d, valorD);
    console.log(valorD);
 gl.bindVertexArray(modelo_vao);
 gl.drawArrays(gl.TRIANGLES, 0, 3);
}
function main() {
 cria_contexto();
 cria_shaders();
 cria_modelos();
 configura();
 renderiza();
 aceita_enter();

}
function aceita_enter() {
   let ids = ["a" , "b" , "c" , "d"];
   for(let i = 0 ; i <= 3 ; i++){
        document.getElementById(ids[i]).addEventListener(
        "keypress", function (event) {
        if (event.key == "Enter") {
            event.preventDefault();
            console.log(ids[i]);
            }
            renderiza();
        }
        );
   }
}

 function clean(){
 
 console.log("Resetado :D");
 let ids = ["a" , "b" , "c" , "d"];
      for(let i = 0 ; i <= 3 ; i++){
        document.getElementById(ids[i]).value = 0;
      }
    
 }
