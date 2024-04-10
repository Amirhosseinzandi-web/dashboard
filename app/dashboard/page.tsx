import Header from "@/components/Header/Header";
import DesktopMenu from "@/components/DesktopMenu/DesktopMenu";
import { Box, Container, Fab, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const DashboardPage = () => {
    return (
        <>
            <Stack direction={"row"} width={"100%"}>
                <Box width={"330px"} sx={{ display: { xs: "none", lg: "block" } }}>
                    <DesktopMenu />
                </Box>

                <Box display={"block"} sx={{ width: { xs: "100%", lg: "calc(100% - 330px)" } }}>
                    <Header />
                    <Box py={9}>

                        <Container maxWidth={"xl"}>

                            <Box display={"flex"} justifyContent={"space-between"} gap={2} sx={{ flexDirection: { xs: "column", sm: "row" } , flexWrap: "wrap" }}>

                                <Box sx={{ padding: "25px 15px", width: { xs: "100%", sm: "48%" , lg:"23%" } }} border={"1px solid #EDEDED"} borderRadius={4} >
                                    <Box display={"flex"} justifyContent={"space-between"} gap={1}>
                                        <Box>

                                            <Typography component={"p"} color={"#667085"} fontSize={12}>Budget</Typography>
                                            <Typography variant="h4" mt={1}>$24k</Typography>
                                        </Box>

                                        <Box>
                                            <Box width={"56px"} height={"56px"} borderRadius={"50%"} bgcolor={"#635BFF"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                                <AttachMoneyIcon sx={{ color: "white", fontSize: "25px" }} />
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box mt={2} display={"flex"} alignItems={"center"} gap={2}>
                                        <Box display={"flex"} alignItems={"center"} color={"#15b79f"} gap={1}>
                                            <ArrowUpwardIcon sx={{ fontSize: "17px" }} />
                                            <Typography>12%</Typography>
                                        </Box>
                                        <Typography component={"p"} fontSize={12} color={"#667085"}>Since last month</Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ padding: "25px 15px", width: { xs: "100%", sm: "48%" , lg:"23%" } }} border={"1px solid #EDEDED"} borderRadius={4} >
                                    <Box display={"flex"} justifyContent={"space-between"} gap={1}>
                                        <Box>

                                            <Typography component={"p"} color={"#667085"} fontSize={12}>TOTAL CUSTOMERS</Typography>
                                            <Typography variant="h4" mt={1}>$1.6k</Typography>
                                        </Box>

                                        <Box>
                                            <Box width={"56px"} height={"56px"} borderRadius={"50%"} bgcolor={"#15b79f"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                                <AttachMoneyIcon sx={{ color: "white", fontSize: "25px" }} />
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box mt={2} display={"flex"} alignItems={"center"} gap={2}>
                                        <Box display={"flex"} alignItems={"center"} color={"red"} gap={1}>
                                            <ArrowDownwardIcon sx={{ fontSize: "17px" }} />
                                            <Typography>16%</Typography>
                                        </Box>
                                        <Typography component={"p"} fontSize={12} color={"#667085"}>Since last month</Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ padding: "25px 15px", width: { xs: "100%", sm: "48%" , lg:"23%" } }} border={"1px solid #EDEDED"} borderRadius={4} >
                                    <Box display={"flex"} justifyContent={"space-between"} gap={1}>
                                        <Box>

                                            <Typography component={"p"} color={"#667085"} fontSize={12}>Budget</Typography>
                                            <Typography variant="h4" mt={1}>$24k</Typography>
                                        </Box>

                                        <Box>
                                            <Box width={"56px"} height={"56px"} borderRadius={"50%"} bgcolor={"#635BFF"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                                <AttachMoneyIcon sx={{ color: "white", fontSize: "25px" }} />
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box mt={2} display={"flex"} alignItems={"center"} gap={2}>
                                        <Box display={"flex"} alignItems={"center"} color={"#15b79f"} gap={1}>
                                            <ArrowUpwardIcon sx={{ fontSize: "17px" }} />
                                            <Typography>12%</Typography>
                                        </Box>
                                        <Typography component={"p"} fontSize={12} color={"#667085"}>Since last month</Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ padding: "25px 15px", width: { xs: "100%", sm: "48%" , lg:"23%" } }} border={"1px solid #EDEDED"} borderRadius={4} >
                                    <Box display={"flex"} justifyContent={"space-between"} gap={1}>
                                        <Box>

                                            <Typography component={"p"} color={"#667085"} fontSize={12}>Budget</Typography>
                                            <Typography variant="h4" mt={1}>$24k</Typography>
                                        </Box>

                                        <Box>
                                            <Box width={"56px"} height={"56px"} borderRadius={"50%"} bgcolor={"#635BFF"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                                <AttachMoneyIcon sx={{ color: "white", fontSize: "25px" }} />
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box mt={2} display={"flex"} alignItems={"center"} gap={2}>
                                        <Box display={"flex"} alignItems={"center"} color={"#15b79f"} gap={1}>
                                            <ArrowUpwardIcon sx={{ fontSize: "17px" }} />
                                            <Typography>12%</Typography>
                                        </Box>
                                        <Typography component={"p"} fontSize={12} color={"#667085"}>Since last month</Typography>
                                    </Box>
                                </Box>

                            </Box>
                        </Container>

                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, nostrum voluptatem cumque expedita maiores rem alias corporis ipsum tempora repudiandae eos dolorem aliquid fugiat fuga? Dolore voluptates sint asperiores sunt voluptate ipsa explicabo dolores blanditiis. Debitis ducimus rerum dicta praesentium iure, eum neque temporibus a ipsa id? Nostrum eum dolores laboriosam accusamus veniam laborum maxime quaerat optio quas et nesciunt repellat consequatur voluptatem dolore, voluptate officiis ex quae deserunt magni eos error quo magnam? Expedita, quidem qui odit dignissimos et ratione inventore enim illo deserunt temporibus voluptates accusamus, obcaecati a distinctio dolorum natus, nihil delectus. Tempora inventore repudiandae sint nesciunt odio deleniti cupiditate harum itaque et mollitia! Totam quasi dicta molestiae, eligendi laborum laudantium recusandae velit ipsa voluptatibus perferendis, debitis ad dolore expedita libero natus aut magni! Facere, adipisci. Illo asperiores necessitatibus pariatur quidem sed labore facilis fugit rem error quis itaque beatae, ab incidunt adipisci provident voluptatem eos quo facere, amet iste tempore dolores ea repellendus assumenda. Voluptates, doloremque laboriosam labore eaque magnam alias nisi veniam ipsum delectus minus ipsam impedit molestiae culpa incidunt fugiat sunt officia animi aspernatur optio commodi sit id voluptatibus quasi! Ipsam, repellendus officiis. Tempora voluptate eaque doloremque! Aliquam maiores beatae sunt iusto aliquid tenetur corporis voluptatum dolorem magnam, animi soluta vel natus quas error cumque quibusdam ex veritatis est explicabo facere culpa amet debitis. Itaque, doloribus provident quod laborum quibusdam nostrum ratione tempora in voluptates dolores esse illum harum vel aut accusantium animi veritatis facilis eos delectus omnis libero! Necessitatibus reprehenderit at rerum corrupti atque aliquid animi sequi eveniet sint asperiores amet iusto commodi, voluptatem voluptatum. Ipsam assumenda, quod aliquam at fuga quae optio suscipit expedita temporibus magnam, saepe dolorem consectetur vel facilis eligendi quas, aperiam voluptatibus ut perferendis nostrum? Cum unde dolore tenetur! Impedit minima cupiditate distinctio autem ratione odio, odit ipsam. Quibusdam molestias illum facere, quod, obcaecati doloremque dolor consequatur sit quasi minima amet pariatur magni dicta velit cumque aliquid possimus quia nesciunt reprehenderit, quis officiis repellendus quas ipsam harum? Praesentium officia, non quam magni repellat assumenda? Magnam optio deleniti quibusdam libero hic cupiditate voluptatem. Ipsa quisquam nesciunt laboriosam sed, ullam necessitatibus dolorum sapiente est facilis reprehenderit sint similique commodi fuga! Provident delectus consequuntur esse unde, voluptas minus facere soluta. Cupiditate ipsa quam eligendi pariatur vero. Omnis nam tenetur commodi, nulla recusandae eaque possimus fuga dolorum quos, totam ullam magnam quas dicta incidunt praesentium vitae. Blanditiis dignissimos, excepturi voluptates explicabo velit quis atque vel recusandae non eligendi earum autem. Pariatur culpa, distinctio rem earum autem totam nesciunt, quod eligendi incidunt eius exercitationem cupiditate laborum nobis molestias, minima officiis voluptas sed. Est sunt sapiente accusantium dolor! Eaque ab saepe doloremque nisi repellat voluptatum, quisquam unde veritatis, non sit animi laudantium iure reiciendis libero cupiditate, officiis quasi ut obcaecati repellendus est veniam eveniet enim. Libero, consequatur veritatis dolorum tenetur fugiat impedit, aliquid molestias neque tempora fugit modi doloribus provident quae temporibus! Iste et, debitis officiis consequuntur id ea unde tempora aut quas perferendis aliquam labore autem illum minus ipsam, dolores ad consequatur laboriosam porro mollitia, rem accusantium exercitationem perspiciatis? Aliquam doloribus eum dolore, veritatis pariatur ratione amet quam accusamus ducimus quidem libero quia rerum? Pariatur dignissimos, vel omnis quis ipsum minus voluptatum porro iusto odit maxime magni voluptate error, excepturi, voluptatem non reprehenderit consequuntur ex inventore. Dolores maiores labore repudiandae cum numquam? Molestiae molestias modi cumque perspiciatis pariatur mollitia, ea, earum tenetur repellendus magni officia sequi sint maxime voluptatibus veniam accusantium possimus at perferendis qui similique exercitationem laboriosam, facere ut! Quam earum itaque autem, sit officiis consequuntur numquam reprehenderit. Magnam, soluta inventore voluptatum velit odit laboriosam veritatis deleniti aut quos harum unde blanditiis et quidem, vitae adipisci modi. Voluptatibus, repudiandae vitae deleniti quaerat temporibus magni labore, laborum cumque nisi a cum animi magnam? Laboriosam nostrum aliquam quae eum numquam, neque dolorum. Possimus, dignissimos. Alias natus doloremque laborum maxime accusantium praesentium, ad soluta rerum mollitia rem voluptatibus laboriosam fugit, ratione temporibus neque vero quo quasi quod aspernatur veniam. Rem quidem distinctio itaque reiciendis, labore, placeat error officia et aliquam atque totam nesciunt iusto! Nisi soluta atque laudantium aspernatur quis quae eos voluptates, nobis magni ad commodi modi dolorem fuga ab consequuntur repellendus hic, quidem assumenda laboriosam aliquam repellat. Illum excepturi placeat dolorem perferendis repudiandae modi qui accusamus. Totam nostrum hic a inventore. At optio ipsum cum adipisci magnam ea sed quod, quibusdam sint exercitationem fuga iure officiis earum suscipit similique nisi vero laudantium veniam distinctio corporis illo esse hic aspernatur voluptas. Ducimus id consequatur corrupti delectus quam laudantium illum, dolore quo exercitationem sapiente dicta magni officia amet hic animi explicabo nesciunt qui minus, ea ut! Voluptas nihil, saepe omnis ratione alias et. Impedit suscipit facilis tenetur porro alias enim cum quidem odio optio sint, inventore ipsum, saepe dolorem incidunt nostrum quibusdam ipsam tempore voluptas! Debitis in ducimus minus voluptatibus, repellat quod soluta ex aliquam odio error beatae veritatis ipsam harum neque adipisci dolorum asperiores voluptatum impedit fugiat dicta! Nobis voluptas cumque veritatis eum nemo ex, beatae facilis voluptatum dicta rerum et commodi incidunt quasi sint qui modi dolorum odit ducimus molestias earum vero excepturi consequuntur. Officia aliquam quam cum tenetur similique quidem temporibus laboriosam repellendus expedita earum possimus itaque error quis aperiam omnis, et cumque exercitationem eius quasi natus ab dolores culpa reiciendis excepturi. Eveniet facere ratione fuga dolore repellendus atque nemo exercitationem voluptate nisi quasi minima autem unde iste, recusandae nulla! Voluptatibus, aspernatur molestiae quis reiciendis error impedit est perspiciatis veniam provident totam neque harum minus dicta voluptatum, at soluta eos odit consequuntur repellendus, fugit maiores nulla. Nesciunt natus vero fuga eum, adipisci voluptates repellat quia, dolorum iure in quis facilis laborum ipsa voluptatibus provident tenetur ipsam. At dolorum est praesentium quasi, eveniet culpa perferendis necessitatibus nostrum a dignissimos tempora molestias unde, accusantium nam autem, fugit minima suscipit illo totam sit nihil vel consequatur nobis. Magnam, quasi aut porro ex corrupti hic odit ducimus voluptates quam iure illum consequatur, aliquam sint maiores sequi fuga numquam! Doloribus architecto vel maxime laudantium voluptates sapiente ex libero, est esse nobis id eum magnam saepe expedita, aperiam alias corrupti unde sed perferendis? Placeat possimus illum, voluptatum ducimus itaque doloremque nobis ea aut sit nemo. Eveniet ullam tempora hic, magni, architecto voluptatibus delectus explicabo ipsam repellat molestiae reiciendis nulla necessitatibus neque quisquam vero exercitationem! Blanditiis minima enim veniam dicta, quas sint nobis officia. Praesentium est provident aliquam soluta amet, nihil error esse! Neque exercitationem dolorem provident eos. Atque animi inventore sunt voluptates. Minus maxime labore voluptate quaerat perspiciatis eveniet libero impedit non rem. Aspernatur veniam soluta ipsum fuga ipsam quidem, molestiae quis deserunt, omnis minus repellendus earum, repudiandae autem magnam libero! Iste quidem exercitationem deleniti accusantium sed? Odio magnam dolorum sint rerum eveniet quisquam sed quae harum maiores accusamus incidunt qui tempore laborum nesciunt numquam, provident corrupti, blanditiis cumque ab amet ad impedit. Odio quaerat quibusdam minima at fugit. Optio iusto maiores porro delectus perspiciatis nihil consectetur voluptatem molestiae aperiam consequatur, adipisci praesentium dicta corporis omnis vitae unde eius iure ipsam inventore quia accusamus provident ab obcaecati laudantium! Optio dolores dolore et, debitis vel ab sint necessitatibus. Fugit atque explicabo facilis, id mollitia deleniti. Dolorum culpa minima deserunt eum itaque fugit beatae harum soluta autem. At a odio enim. Itaque consequatur deleniti commodi doloremque vel deserunt blanditiis temporibus ratione quaerat. Mollitia eveniet enim hic perferendis asperiores iste maxime dolore consequuntur impedit, accusantium aliquam blanditiis a repellat laboriosam, quae excepturi modi autem. Facilis suscipit cum eum ut error quod voluptate et neque sunt vel nam ipsa officiis facere, repellendus quasi amet. Eius quod officiis consectetur? Exercitationem aperiam incidunt quae quibusdam atque ullam minus molestiae quos. Quas odio, fugiat voluptatum ducimus provident perspiciatis quis voluptas officia culpa modi expedita labore dolor et exercitationem incidunt hic est explicabo. Quisquam quia consequuntur ab, et quod nam, aut tempora mollitia, repudiandae aliquam nesciunt quaerat quis! Totam, labore? Sequi saepe labore itaque beatae reiciendis quae ratione ad ducimus incidunt nostrum veritatis, praesentium laboriosam accusamus voluptate amet quisquam eum ut mollitia voluptatum eligendi cupiditate natus neque dolore eaque. Ut quisquam aliquid corrupti dolore vel quae dolorum voluptatibus ab molestiae eos deleniti ipsam, perspiciatis cum dolorem in repellat, quibusdam commodi sit? Consequuntur consequatur repudiandae qui sit facere velit aut voluptatem veniam iure nihil. Esse animi obcaecati provident error sit quibusdam quasi et consequatur perspiciatis tenetur corporis nemo nam sed, ipsa accusamus consequuntur minus tempore? Tempora similique possimus eaque nobis ipsa alias distinctio vel cumque cum quisquam ea saepe maxime corporis ducimus, dolorum voluptatem perspiciatis tempore omnis necessitatibus nam nemo. Similique quas dicta voluptatibus numquam aspernatur quia totam quaerat tempore itaque ratione, ad error eaque facilis voluptatum! Perferendis iste maxime, dignissimos veniam debitis atque ex optio nulla ipsam deleniti facere aspernatur accusantium, animi labore unde! Nulla placeat tempora facilis ab, unde magnam illum, nobis voluptatibus corporis atque asperiores minima laboriosam earum aperiam dicta! Assumenda est quia sed sapiente ex maiores facere impedit, officia nisi ipsa laudantium repellat! Mollitia voluptate tempore magnam eius fugit, voluptatibus hic, cumque itaque dolorum ipsum placeat maxime quisquam eveniet. Vel assumenda harum consequuntur quaerat perspiciatis illo soluta magnam amet. A quisquam voluptatem veritatis facilis?
                        </p>
                    </Box>
                </Box>

            </Stack>

        </>
    );
}

export default DashboardPage;