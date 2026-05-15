import './styles/dashboard.css'
import MenuLateral from './MenuLateral'
import ModalImg from './ModalImg';
import { useState } from 'react'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Cell,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
    PieChart,
    Pie
} from "recharts";

export default function Dashboard() {
    const [totalHoje, setTotalHoje] = useState(27);
    const [taxaConformidade, setTaxaConformidade] = useState(91.23);
    const [cameraCritica, setCameraCritica] = useState("CAM03");
    const [falsosPositivos, setFalsosPositivos] = useState(4);
    const [intervaloMaisOcorrencias, setIntervaloMaisOcorrencias] = useState('10:00');

    const data = [
        { name: "Jan", valor: 40 },
        { name: "Fev", valor: 55 },
        { name: "Mar", valor: 78 },
        { name: "Abr", valor: 62 }
    ];

    const ocorrenciasPorTipoData = [
        { tipo: "Veículos", Quantidade: 3 },
        { tipo: "Barreiras", Quantidade: 12 },
        { tipo: "Pessoas", Quantidade: 10 },
    ];

    const ocorrenciasPorHoraData = [
        { Hora: "07:00", Quantidade: 3 },
        { Hora: "08:00", Quantidade: 0 },
        { Hora: "09:00", Quantidade: 2 },
        { Hora: "10:00", Quantidade: 4 },
        { Hora: "11:00", Quantidade: 0 },
        { Hora: "12:00", Quantidade: 1 },
        { Hora: "13:00", Quantidade: 1 },
        { Hora: "14:00", Quantidade: 3 },
    ]

    const distribuicaoPorCameraData = [
        { camera: "CAM01", Quantidade: 3 },
        { camera: "CAM02", Quantidade: 6 },
        { camera: "CAM03", Quantidade: 7 },
        { camera: "CAM04", Quantidade: 4 }
    ]

    const ultimasOcorrencias = [
        {
            id: 1,
            data: "2025-02-24T10:33:00",
            camera: "CAM07",
            item: "Caminhão ↔ Trator",
            imagemUrl: "/imagens/evento1.jpg"
        },
        {
            id: 2,
            data: "2025-02-24T10:40:00",
            camera: "CAM05",
            item: "Veículo ↔ Pessoa (2m)",
            imagemUrl: "/imagens/evento2.jpg"
        },
        {
            id: 3,
            data: "2025-02-24T11:02:00",
            camera: "CAM09",
            item: "Caminhão ↔ Obstáculo",
            imagemUrl: "/imagens/evento3.jpg"
        },
        {
            id: 4,
            data: "2025-02-24T11:15:00",
            camera: "CAM07",
            item: "Trator ↔ Veículo (1.5m)",
            imagemUrl: "/imagens/evento4.jpg"
        },
        {
            id: 5,
            data: "2025-02-24T11:42:00",
            camera: "CAM12",
            item: "Veículo ↔ Pessoa",
            imagemUrl: "/imagens/evento5.jpg"
        },
        {
            id: 6,
            data: "2025-02-24T12:08:00",
            camera: "CAM05",
            item: "Caminhão ↔ Trator",
            imagemUrl: "/imagens/evento6.jpg"
        },
        {
            id: 7,
            data: "2025-02-24T13:17:00",
            camera: "CAM09",
            item: "Veículo ↔ Obstáculo",
            imagemUrl: "/imagens/evento7.jpg"
        },
        {
            id: 8,
            data: "2025-02-24T13:45:00",
            camera: "CAM07",
            item: "Trator ↔ Pessoa",
            imagemUrl: "/imagens/evento8.jpg"
        },
        {
            id: 9,
            data: "2025-02-24T14:22:00",
            camera: "CAM12",
            item: "Caminhão ↔ Veículo",
            imagemUrl: "/imagens/evento9.jpg"
        },
        {
            id: 10,
            data: "2025-02-24T14:50:00",
            camera: "CAM05",
            item: "Veículo ↔ Pessoa (1.2m)",
            imagemUrl: "/imagens/evento10.jpg"
        },
        {
            id: 11,
            data: "2025-02-24T15:33:00",
            camera: "CAM09",
            item: "Caminhão ↔ Obstáculo",
            imagemUrl: "/imagens/evento11.jpg"
        }
    ];

    const historicoCompleto = [
        // Eventos de proximidade - Primeiros registros
        {
            id: 101,
            data: "2025-02-24T10:33:00",
            camera: "CAM07",
            item: "Caminhão ↔ Trator",
            imagemUrl: "/imagens/evento1.jpg",
            confianca: 0.92,
            status: 'Risco baixo'
        },
        {
            id: 102,
            data: "2025-02-24T10:33:00",
            camera: "CAM05",
            item: "Veículo ↔ Pessoa",
            imagemUrl: "/imagens/evento2.jpg",
            confianca: 0.87,
            status: 'Risco moderado'
        },
        {
            id: 103,
            data: "2025-02-24T10:33:00",
            camera: "CAM09",
            item: "Caminhão ↔ Obstáculo",
            imagemUrl: "/imagens/evento3.jpg",
            confianca: 0.97,
            status: 'Risco moderado'
        },
        {
            id: 104,
            data: "2025-02-24T10:33:00",
            camera: "CAM07",
            item: "Trator ↔ Veículo",
            imagemUrl: "/imagens/evento4.jpg",
            confianca: 0.87,
            status: 'Seguro'
        },

        {
            id: 107,
            data: "2025-02-24T11:42:00",
            camera: "CAM09",
            item: "Veículo ↔ Obstáculo",
            imagemUrl: "/imagens/evento7.jpg",
            confianca: 0.95,
            status: 'Seguro'
        },

        {
            id: 104,
            data: "2025-02-24T10:33:00",
            camera: "CAM07",
            item: "Trator ↔ Veículo",
            imagemUrl: "/imagens/evento4.jpg",
            confianca: 0.87,
            status: 'Seguro'
        },

        {
            id: 105,
            data: "2025-02-24T11:15:00",
            camera: "CAM12",
            item: "Veículo ↔ Pessoa",
            imagemUrl: "/imagens/evento5.jpg",
            confianca: 0.78,
            status: 'Risco baixo'
        },
        {
            id: 106,
            data: "2025-02-24T11:15:00",
            camera: "CAM05",
            item: "Caminhão ↔ Trator",
            imagemUrl: "/imagens/evento6.jpg",
            confianca: 0.82,
            status: 'Risco baixo'
        },
        {
            id: 107,
            data: "2025-02-24T11:42:00",
            camera: "CAM09",
            item: "Veículo ↔ Obstáculo",
            imagemUrl: "/imagens/evento7.jpg",
            confianca: 0.95,
            status: 'Seguro'
        },
        {
            id: 108,
            data: "2025-02-24T12:08:00",
            camera: "CAM07",
            item: "Trator ↔ Pessoa",
            imagemUrl: "/imagens/evento8.jpg",
            confianca: 0.63,
            status: 'Risco moderado'
        },
        {
            id: 109,
            data: "2025-02-24T12:30:00",
            camera: "CAM12",
            item: "Caminhão ↔ Veículo",
            imagemUrl: "/imagens/evento9.jpg",
            confianca: 0.91,
            status: 'Seguro'
        },
        {
            id: 110,
            data: "2025-02-24T13:17:00",
            camera: "CAM05",
            item: "Veículo ↔ Pessoa",
            imagemUrl: "/imagens/evento10.jpg",
            confianca: 0.72,
            status: 'Risco moderado'
        },

        {
            id: 107,
            data: "2025-02-24T11:42:00",
            camera: "CAM09",
            item: "Veículo ↔ Obstáculo",
            imagemUrl: "/imagens/evento7.jpg",
            confianca: 0.95,
            status: 'Seguro'
        },

        {
            id: 111,
            data: "2025-02-24T13:45:00",
            camera: "CAM09",
            item: "Caminhão ↔ Obstáculo",
            imagemUrl: "/imagens/evento11.jpg",
            confianca: 0.89,
            status: 'Risco baixo'
        },
        {
            id: 112,
            data: "2025-02-24T14:22:00",
            camera: "CAM07",
            item: "Trator ↔ Veículo",
            imagemUrl: "/imagens/evento12.jpg",
            confianca: 0.94,
            status: 'Seguro'
        },
        {
            id: 113,
            data: "2025-02-24T14:50:00",
            camera: "CAM12",
            item: "Veículo ↔ Pessoa",
            imagemUrl: "/imagens/evento13.jpg",
            confianca: 0.77,
            status: 'Risco moderado'
        },
        {
            id: 114,
            data: "2025-02-24T15:10:00",
            camera: "CAM05",
            item: "Caminhão ↔ Trator",
            imagemUrl: "/imagens/evento14.jpg",
            confianca: 0.96,
            status: 'Risco baixo'
        },
        {
            id: 115,
            data: "2025-02-24T15:33:00",
            camera: "CAM09",
            item: "Veículo ↔ Obstáculo",
            imagemUrl: "/imagens/evento15.jpg",
            confianca: 0.69,
            status: 'Risco baixo'
        },
        {
            id: 116,
            data: "2025-02-24T16:01:00",
            camera: "CAM07",
            item: "Trator ↔ Pessoa",
            imagemUrl: "/imagens/evento16.jpg",
            confianca: 0.88,
            status: 'Risco moderado'
        },
        {
            id: 117,
            data: "2025-02-24T16:30:00",
            camera: "CAM12",
            item: "Caminhão ↔ Veículo",
            imagemUrl: "/imagens/evento17.jpg",
            confianca: 0.93,
            status: 'Seguro'
        },
        {
            id: 118,
            data: "2025-02-24T16:55:00",
            camera: "CAM05",
            item: "Veículo ↔ Pessoa",
            imagemUrl: "/imagens/evento18.jpg",
            confianca: 0.84,
            status: 'Risco moderado'
        },
        {
            id: 119,
            data: "2025-02-24T17:20:00",
            camera: "CAM09",
            item: "Caminhão ↔ Obstáculo",
            imagemUrl: "/imagens/evento19.jpg",
            confianca: 0.79,
            status: 'Risco baixo'
        },
        {
            id: 120,
            data: "2025-02-24T17:45:00",
            camera: "CAM07",
            item: "Trator ↔ Veículo",
            imagemUrl: "/imagens/evento20.jpg",
            confianca: 0.81,
            status: 'Seguro'
        },
        {
            id: 121,
            data: "2025-02-25T08:30:00",
            camera: "CAM12",
            item: "Veículo ↔ Pessoa",
            imagemUrl: "/imagens/evento21.jpg",
            confianca: 0.90,
            status: 'Risco baixo'
        },
        {
            id: 122,
            data: "2025-02-25T09:15:00",
            camera: "CAM05",
            item: "Caminhão ↔ Trator",
            imagemUrl: "/imagens/evento22.jpg",
            confianca: 0.73,
            status: 'Risco moderado'
        },
        {
            id: 123,
            data: "2025-02-25T09:45:00",
            camera: "CAM09",
            item: "Veículo ↔ Obstáculo",
            imagemUrl: "/imagens/evento23.jpg",
            confianca: 0.98,
            status: 'Seguro'
        },
        {
            id: 124,
            data: "2025-02-25T10:10:00",
            camera: "CAM07",
            item: "Trator ↔ Pessoa",
            imagemUrl: "/imagens/evento24.jpg",
            confianca: 0.85,
            status: 'Risco moderado'
        },
        {
            id: 125,
            data: "2025-02-25T10:40:00",
            camera: "CAM12",
            item: "Caminhão ↔ Veículo",
            imagemUrl: "/imagens/evento25.jpg",
            confianca: 0.91,
            status: 'Risco baixo'
        }
    ];

    const formatarData = (dataISO) => {
        const data = new Date(dataISO);
        return data.toLocaleString("pt-BR");
    };

    const COLORS = ["#00939a", "#006065", "#003e41", "#00cad4"];

    const [modalImagem, setModalImagem] = useState(false);
    const [dadosOcorrencia, setDadosOcorrencia] = useState([]);

    return (
        <>
            <main className="dashboardMain">
                <MenuLateral></MenuLateral>
                <section className='principalDash'>
                    <header className='superiorDash'>
                        <h2>Dashboard</h2>
                        <p>Feedback visual sobre o monitoramento, observe dados relevantes.</p>
                    </header>
                    <section className='blocosDash'>
                        <div className='bloco infoNumerica'>
                            <p className='tituloBloco'>Eventos hoje</p>
                            <h1>{totalHoje}</h1>
                        </div>
                        <div className='bloco infoNumerica'>
                            <p className='tituloBloco'>Taxa de distância segura</p>
                            <h1>{taxaConformidade}%</h1>
                        </div>
                        <div className='bloco infoNumerica cameraCritica'>
                            <p className='tituloBloco'>Câmera crítica</p>
                            <h1>{cameraCritica}</h1>
                        </div>
                        <div className='bloco distribuicaoPorCamera'>
                            <p className='tituloBloco'>Distribuição por câmera</p>
                            <div className='auxiliarGrafico'>
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={distribuicaoPorCameraData}
                                            dataKey="Quantidade"
                                            nameKey="camera"
                                            cx="50%"
                                            cy="50%"
                                            outerRadius="90%"
                                        // label
                                        >
                                            {distribuicaoPorCameraData.map((entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={COLORS[index % COLORS.length]}
                                                />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className='bloco inforOcorrenciasHora'>
                            <p className='tituloBloco'>Ocorrências por intervalo de horário</p>
                            <div className='auxiliarGrafico'>
                                <ResponsiveContainer width="90%" height="100%">
                                    <LineChart data={ocorrenciasPorHoraData}>
                                        <XAxis dataKey="Hora" />
                                        <YAxis />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="Quantidade" stroke="var(--azulDestaque)" strokeWidth={3} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className='bloco falsosPositivos'>
                            <p className='tituloBloco'>Falsos positívos</p>
                            <h1>{falsosPositivos}</h1>
                            <hr />
                            <p className='tituloBloco'>Intervalo com mais ocorrências</p>
                            <h1>{intervaloMaisOcorrencias}</h1>
                        </div>
                        <div className='bloco analiseEstatistica'>
                            <p className='tituloBloco'>Análise estatística</p>
                            <hr />
                            <p className='inforEstatistica'>
                                <b>Média diária de eventos:</b> 18 <br />
                                <b>Total para esta semana:</b> 41 eventos <br />
                                <b>Média semanal:</b> 27 eventos <br />
                                <b>Distância média mínima registrada:</b> 2.8m <br />
                                <b>Cenário mais crítico:</b> Veículo ↔ Pessoa <br />
                                <b>Câmera com maior incidência:</b> CAM07 <br />
                            </p>
                        </div>
                        <div className='bloco ocorrenciasPorTipo'>
                            <p className='tituloBloco'>Ocorrências por tipo</p>
                            <div className='auxiliarGrafico'>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={ocorrenciasPorTipoData}>
                                        {/* <Legend /> */}
                                        <CartesianGrid strokeDasharray="1 1" />
                                        <XAxis dataKey="tipo" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="Quantidade" fill="var(--azulDestaque)" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className='bloco ultimasOcorrencias'>
                            <p className='tituloBloco'>Últimas ocorrências</p>
                            <table border={1} className='tabelaUltimasOcorrencias'>
                                <thead>
                                    <tr>
                                        <th>Data</th>
                                        <th>Câmera</th>
                                        <th>Item envolvido</th>
                                        <th>Imagem</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {ultimasOcorrencias.map((ocorrencia) => (
                                        <tr key={ocorrencia.id}>
                                            <td>{formatarData(ocorrencia.data)}</td>
                                            <td>{ocorrencia.camera}</td>
                                            <td>{ocorrencia.item}</td>
                                            <td>
                                                <button
                                                    className='botaoVerImagem'
                                                    onClick={() => {
                                                        setModalImagem(true)
                                                        setDadosOcorrencia({
                                                            data: ocorrencia.data,
                                                            camera: ocorrencia.camera,
                                                            item: ocorrencia.item
                                                        })
                                                    }}
                                                >Ver</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='bloco historicoCompleto'>
                            <p className='tituloBloco'>Histórico completo</p>
                            <table border={1} className='tabelaUltimasOcorrencias'>
                                <thead>
                                    <tr>
                                        <th>Data</th>
                                        <th>Câmera</th>
                                        <th>Item envolvido</th>
                                        <th>Imagem</th>
                                        <th>Confiança</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {historicoCompleto.map((ocorrencia) => (

                                        <tr key={ocorrencia.id}>
                                            <td>{formatarData(ocorrencia.data)}</td>
                                            <td>{ocorrencia.camera}</td>
                                            <td>{ocorrencia.item}</td>
                                            <td>
                                                <button
                                                    className='botaoVerImagem'
                                                    onClick={() => {
                                                        setModalImagem(true)
                                                        setDadosOcorrencia({
                                                            data: ocorrencia.data,
                                                            camera: ocorrencia.camera,
                                                            item: ocorrencia.item
                                                        })
                                                    }}
                                                >Ver</button>
                                            </td>
                                            <td>{ocorrencia.confianca}</td>
                                            <td>
                                                <p className={ocorrencia.status == 'Risco baixo' ? 'analise' : ocorrencia.status == 'Risco moderado' ? 'naoConfirmado' : ocorrencia.status == 'Seguro' ? 'confirmado' : ''}>
                                                    {ocorrencia.status}
                                                </p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </section>
                {modalImagem && (
                    <ModalImg setModalImagem={setModalImagem} dadosOcorrencia={dadosOcorrencia}></ModalImg>
                )}
            </main>
        </>
    )
}