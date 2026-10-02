import './Softwares.css';

export default function Softwares() {
    return (
        <>
            <span>Softwares</span>
            <br />
            <span>Operating Systems</span>
            <br />

            <ul className='software_List'>
                <li>
                    <span>Debian</span>
                    <span>
                        I don't like the initial visual of this OS, but it's not something I can't work out.
                        Let's say it's the best when it comes to stability, and lightness of RAM. But there's a catch, Gnome environment consumes a lot of CPU em GPU usage and we better choose other desktop environments that are know to be lightweight, such as Lxqt or Xfce.
                        Another factor I like is the fact it's well maintained by the community. Ubuntu is the one with most contributions, but it's too heavy when it comes to RAM, it's absurde...
                        I recomend this OS, but not in all cases... If a client comes to the shop, a IT senior, with a old PC wich he wants to revive I may recomend Debian with the lightweight DEs.
                    </span>
                    <a href=''>Official Debian website.</a>
                </li>

                <li>
                    <span>Ubuntu</span>
                    <span>
                        The first linux OS I ever tried. I associated with an old Andoid version on a tablet, I don't know why... My programming teacher didn't like my comment by the way.
                        Like I said, it's too heavy and I don't recomend unless the machine has around 8 GB of RAM, something that may run out easily with the usage of the OS it self.
                    </span>
                    <a href=''>Official Ubuntu website.</a>
                </li>

                <li>
                    <span>Lubuntu</span>
                    <span>
                        This is not the OS I recomend in normal use because there isn't that much contributors.
                        I generally use inside virtual machines for isolated testing of certain codes, softwares and websites I see around. Those code are usually bash inside VS Code I see online, new softwares I wanna make sure that don't present any, at least visually, suspicious behaviours and websites people post around... I know, I'm crazy to do this part, but it's apart of my may to investigate in order to report.
                    </span>
                    <a href=''>Official Lubuntu website.</a>
                </li>

                <li>
                    <span>Mint</span>
                    <span></span>
                    <a href=''>Official Mint website.</a>
                </li>

                <li>
                    <span>Zorin</span>
                    <span></span>
                    <a href=''>Official Zorin website.</a>
                </li>

                <li>
                    <span>Fedora</span>
                    <span></span>
                    <a href=''>Official Fedora website.</a>
                </li>

                <li>
                    <span>Kali</span>
                    <span></span>
                    <a href=''>Official Kali website.</a>
                </li>
            </ul>
        </>
    )
}