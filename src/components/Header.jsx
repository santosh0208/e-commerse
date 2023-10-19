import { Autocomplete, Group, Burger, rem, Button,Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';

import classes from './HeaderSerach.module.css'
import bannerImage from '@/assets/images/Anvayaa.svg';



export function HeaderSearch() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className={classes.header}>
      <div className={classes.inner} style={{background: 'linear-gradient(to right, white, #FFC46A 40%, #F79123)'}}>
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
            <Button style={{marginLeft:'10px', marginRight:'10px'}}>Cart</Button>
        </Group>
          
        
      </div>
     </header>
  );
}