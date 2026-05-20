import React from 'react';
import { Stack, Box } from '@mui/material';
import useDeviceDetect from '../../hooks/useDeviceDetect';

interface EventData {
	eventTitle: string;
	city: string;
	description: string;
	imageSrc: string;
}
const eventsData: EventData[] = [
	{
		eventTitle: 'Dron Shou',
		city: 'Incheon',
		description:
			'Experience magic and dron shou in Incheon',
		imageSrc: '/img/events/Incheon.png',
	},
	{
		eventTitle: 'HighLights Festival',
		city: 'Seoul',
		description: 'If you have the opportunity to travel to South Korea, do not miss the HighLights Festival!',
		imageSrc: '/img/events/HighLits.jpeg',
	},
	{
		eventTitle: 'Korean Culture',
		city: 'Busan',
		description: 'The most famouse Korean Culture',
		imageSrc: '/img/events/Korean_culture.jpg',
	},
	{
		eventTitle: 'Starlight Festival',
		city: 'Daegu',
		description:
			'Starlight Festival in South Korean!',
		imageSrc: '/img/events/starlight-festival.jpg',
	},
];

const EventCard = ({ event }: { event: EventData }) => {
	const device = useDeviceDetect();

	if (device === 'mobile') {
		return <div>EVENT CARD</div>;
	} else {
		return (
			<Stack
				className="event-card"
				style={{
					backgroundImage: `url(${event?.imageSrc})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<Box component={'div'} className={'info'}>
					<strong>{event?.city}</strong>
					<span>{event?.eventTitle}</span>
				</Box>
				<Box component={'div'} className={'more'}>
					<span>{event?.description}</span>
				</Box>
			</Stack>
		);
	}
};

const Events = () => {
	const device = useDeviceDetect();

	if (device === 'mobile') {
		return <div>EVENT CARD</div>;
	} else {
		return (
			<Stack className={'events'}>
				<Stack className={'container'}>
					<Stack className={'info-box'}>
						<Box component={'div'} className={'left'}>
							<span className={'white'}>Events</span>
							<p className={'white'}>Events waiting your attention!</p>
						</Box>
					</Stack>
					<Stack className={'card-wrapper'}>
						{eventsData.map((event: EventData) => {
							return <EventCard event={event} key={event?.eventTitle} />;
						})}
					</Stack>
				</Stack>
			</Stack>
		);
	}
};

export default Events;
