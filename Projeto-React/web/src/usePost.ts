import { useState } from 'react';

export default function usePost() {
    const [erro, setErro] = useState('');
    const [sucesso, setSucesso] = useState(false);
    const [resposta, setResposta] = useState('');

    async function cadastrarDados<T>({url, dados, token} : 
        {url: string, dados: T, token?: string}) {
            
            const headers: HeadersInit = {
                'Content-Type': 'application/json'
            }
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }

            try {
            const resposta = await fetch(`http://localhost:8080/${url}`, {
                method: 'POST',
                headers,
                body: JSON.stringify(dados)
            })
            setSucesso(true);
            const respostaConvertida = await resposta.json();
            setResposta(respostaConvertida.token);
        } catch (erro) {
        setErro('Não foi possível enviar os dados');
    }
}

return {cadastrarDados, sucesso, erro, resposta}
}