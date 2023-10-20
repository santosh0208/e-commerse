import { Autocomplete, Group, Burger, rem, Button, Image, HoverCard, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';

import classes from './HeaderSerach.module.css'
import bannerImage from '@/assets/images/Anvayaa.svg';



export function HeaderSearch() {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <>
            <header className={classes.header}>
                <div className={classes.inner} style={{ background: 'linear-gradient(to right, white, #FFC46A 40%, #F79123)' }}>
                    <Group>
                        <Image
                            src={bannerImage.src}
                            alt=""
                            height={50}
                            fit="contain"
                        />
                    </Group>
                    <Group>
                        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                    </Group>
                    <Group>
                        <Autocomplete
                            className={classes.search}
                            placeholder="Search"
                            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                            visibleFrom="xs"
                        />
                    </Group>
                    <Group>
                        <Button>Profile</Button>
                        <Button style={{ marginLeft: '10px', marginRight: '10px' }}>Cart</Button>
                    </Group>
                </div>
                <NavLink>
                <HoverCard width={280} shadow="md">
                    <HoverCard.Target>
                        <Button variant="subtle" color="dark">
                            Wheelchairs
                        </Button>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Button variant="subtle" color="dark">
                            Wheelchair Variants
                        </Button>
                    </HoverCard.Dropdown>
                </HoverCard>
                <HoverCard width={280} shadow="md">
                    <HoverCard.Target>
                        <Button variant="subtle" color="dark">
                            Daipers
                        </Button>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Button variant="subtle" color="dark">
                            Adult Daipers
                        </Button>
                    </HoverCard.Dropdown>
                </HoverCard>
                <HoverCard width={280} shadow="md">
                    <HoverCard.Target>
                        <Button variant="subtle" color="dark">
                            Grab Bars
                        </Button>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Button variant="subtle" color="dark">
                            Washroom Hand Bars
                        </Button>
                    </HoverCard.Dropdown>
                </HoverCard>
                <HoverCard width={280} shadow="md">
                    <HoverCard.Target>
                        <Button variant="subtle" color="dark">
                            Wheelchairs
                        </Button>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Button variant="subtle" color="dark">
                            Wheelchair Variants
                        </Button>
                    </HoverCard.Dropdown>
                </HoverCard>
                <HoverCard width={280} shadow="md">
                    <HoverCard.Target>
                        <Button variant="subtle" color="dark">
                            Wheelchairs
                        </Button>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Button variant="subtle" color="dark">
                            Wheelchair Variants
                        </Button>
                    </HoverCard.Dropdown>
                </HoverCard>
            </NavLink>
            </header>
            
        </>
    );
}