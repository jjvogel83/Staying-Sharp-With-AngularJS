//Challenge 3 (Llamas in Space)
//llama.js
var newLlamaRecruit = {
  llamaOne: 'Larry Llama'
};
$http({ method: 'POST', url: '/llamas.json', data: newLlamaRecruit });
