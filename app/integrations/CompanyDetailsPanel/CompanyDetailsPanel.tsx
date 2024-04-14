import { Box, Divider, Pagination, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Image, { StaticImageData } from 'next/image';


import DropboxPic from "@/public/companydetails/1.png"
import MediumPic from "@/public/companydetails/2.png"
import SlackPic from "@/public/companydetails/3.png"
import LyftPic from "@/public/companydetails/4.png"
import GitHubPic from "@/public/companydetails/5.png"
import SquarespacePic from "@/public/companydetails/6.png"

type dataPropsType = {
    src: StaticImageData
    title: string
    description: string
    date: string
    installationStatisic: string
}



const CompanyDetailsPanel = () => {


    const data: dataPropsType[] = [
        {
            src: DropboxPic,
            title: "Dropbox",
            description: "Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.",
            date: "Updated Mar 8, 2024",
            installationStatisic: "594 installs"
        },
        {
            src: MediumPic,
            title: "Medium Corporation",
            description: "Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.",
            date: "Updated Mar 8, 2024",
            installationStatisic: "625 installs"
        },
        {
            src: SlackPic,
            title: "Slack",
            description: "Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield and Charlie Robinson.",
            date: "Updated Mar 8, 2024",
            installationStatisic: "857 installs"
        },
        {
            src: LyftPic,
            title: "Lyft",
            description: "Lyft is an on-demand transportation company based in San Francisco, California.",
            date: "Updated Mar 8, 2024",
            installationStatisic: "406 installs"
        },
        {
            src: GitHubPic,
            title: "GitHub",
            description: "GitHub is a web-based hosting service for Git version control using Git.",
            date: "Updated Mar 8, 2024",
            installationStatisic: "2,000+ installs"
        },
        {
            src: SquarespacePic,
            title: "Squarespace",
            description: "Squarespace provides software as a service for website building and hosting. Headquartered in NYC.",
            date: "Updated Mar 8, 2024",
            installationStatisic: "435 installs"
        }
    ]


    return (
        <>
            <Grid container spacing={2}>
                {
                    data?.map((item, ind) => (
                        <Grid key={ind} xs={12} md={6} lg={4}>
                            <Box height={"100%"} border={"1px solid #EDEDED"} borderRadius={4} display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>

                                <Stack direction={"column"} p={4} gap={1} justifyContent={"center"} alignItems={"center"}>
                                    <figure>
                                        <Image alt={item.title} src={item.src} width={40} height={40} />
                                    </figure>
                                    <Typography variant='h5'>{item.title}</Typography>
                                    <Typography component={"p"}>{item.description}</Typography>
                                </Stack>

                                <Stack borderTop={"1px solid #EDEDED"} p={2} direction={"row"} justifyContent={"space-between"} alignItems={"center"} >
                                    <Typography component={"p"} fontSize={14} color={"#667085"}>{item.date}</Typography>
                                    <Typography component={"p"} fontSize={14} color={"#667085"}>{item.installationStatisic}</Typography>
                                </Stack>

                            </Box>
                        </Grid>
                    ))
                }
            </Grid>

            <Box display={"flex"} justifyContent={"center"} mt={4}>
                <Pagination count={10} />
            </Box>

        </>
    );
}

export default CompanyDetailsPanel;