import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Typography } from '@/components/ui/Typography';
import { Card, CardContent } from '@/components/ui/card';

const EmailForm = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, subject, message }),
        });

        const data = await res.json();
        setStatus(data.message);

        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <div className="mx-4 items-center justify-center gap-8 text-start md:items-center">
            <Typography
                variant="h1"
                className="font-bold text-start md:text-center mt-10 mb-10 mx-4"
            >
               Ecrivez-nous
            </Typography>
            <Card className="border-blue-400">
                <CardContent className='mt-9'>
                    <form onSubmit={sendEmail}>
                        <Input
                            type="email"
                            placeholder="Votre email"
                            className='mt-5'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Input
                            type="text"
                            placeholder="Sujet"
                            className='mt-5'
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                        <Input
                            placeholder="Votre message"
                            value={message}
                            className='mt-5'
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                        <Button type="submit" className='mt-4'>Envoyer</Button>
                        {status && <Typography variant="p" className='text-green-700 font-bold'>{status}</Typography>}
                    </form>
                </CardContent>
            </Card>
        </div>

    );
};

export default EmailForm;
