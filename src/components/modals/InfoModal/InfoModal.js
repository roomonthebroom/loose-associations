import React from 'react';
import { MAX_MISTAKES } from '../../../lib/constants';
import { Info } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../ui/accordion';
import BaseModal from '../BaseModal';

function InfoModal() {
  return (
    <BaseModal
      title=""
      trigger={<Info className="mr-4" />}
      initiallyOpen={false}
      actionButtonText="Got It!"
    >
      <Tabs defaultValue="how-to-play">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="how-to-play">How To Play</TabsTrigger>
          <TabsTrigger value="about-us">About Us</TabsTrigger>
        </TabsList>
        <TabsContent value="how-to-play">
          {' '}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What's The Goal?</AccordionTrigger>
              <AccordionContent>
                Select words and hope for the best.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How Do I Play?</AccordionTrigger>
              <AccordionContent>
                Select 4 words and tap 'Submit' to check if your guess matches
                one of the answer categories.{' '}
                {`You can make ${MAX_MISTAKES} mistakes before the game ends.`}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="about-us">
          {' '}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Who Are You?</AccordionTrigger>
              <AccordionContent>
                This is a fork of a project by{' '}
                <a
                  href="https://andcomputers.io/"
                  target="_blank"
                  className="underline font-bold"
                >
                  andcomputers
                </a>
                . I'm at{' '}
                <a
                  href="http://dekcuf.net"
                  target="_blank"
                  className="underline font-bold"
                >
                  dekcuf.net
                </a>
                , but I don't do much.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How Can I Support?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-1">What's that?</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Any Other Projects to Check Out?
              </AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li>
                    <a
                      href="http://shouldimovetosandiego.com/"
                      target="_blank"
                      className="underline font-bold"
                    >
                      shouldimovetosandiego.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://ghostsdirect.com"
                      target="_blank"
                      className="underline font-bold"
                    >
                      ghostsdirect.com
                    </a>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </BaseModal>
  );
}

export default InfoModal;
