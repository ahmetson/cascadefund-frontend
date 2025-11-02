import React, { useState, useEffect } from 'react'
import { Popover } from '@base-ui-components/react/popover'
import * as RadixSlider from '@radix-ui/react-slider'
import NumberFlow, { NumberFlowGroup, continuous } from '@number-flow/react'
import { getIcon } from '../icon'
import Button from '../custom-ui/Button'
import Badge from '../badge/Badge'
import { cn } from '@/lib/utils'
import { Spinner } from '../ui/shadcn-io/spinner'

interface VotePopoverProps {
    vpAmount: number           // User's current/remaining voting power
    currentVP: number          // Current VP allocated to this issue
    topVP: number             // Top contributor's VP on this issue
    minVP: number             // Minimum VP required to vote
    issueTitle?: string       // Optional issue title for context
    onApply: (newVP: number) => void  // Callback when Apply is clicked
}

const VotePopover: React.FC<VotePopoverProps> = ({
    vpAmount,
    currentVP,
    topVP,
    minVP,
    issueTitle,
    onApply
}) => {
    const [sliderValue, setSliderValue] = useState(currentVP)
    const [isApplying, setIsApplying] = useState(false)
    const [originalVP] = useState(currentVP)

    // Reset slider when currentVP changes (after apply)
    useEffect(() => {
        setSliderValue(currentVP)
    }, [currentVP])

    const handleSliderChange = (value: number[]) => {
        setSliderValue(value[0])
    }

    const handleApply = () => {
        setIsApplying(true)
        onApply(sliderValue)

        // Reset after 2 seconds
        setTimeout(() => {
            setIsApplying(false)
        }, 2000)
    }

    let calculatedRemaining = vpAmount - (sliderValue - currentVP)
    if (calculatedRemaining > vpAmount) {
        calculatedRemaining = vpAmount
    }
    const hasChanged = sliderValue !== originalVP
    const maxVP = topVP > currentVP + vpAmount ? topVP : currentVP + vpAmount
    const topPercentage = (topVP / maxVP) * 100
    const minPercentage = (minVP / maxVP) * 100
    const currentPercentage = (currentVP / maxVP) * 100

    const trigger = (
        <Button variant="primary" size="sm" className="h-7 text-xs">
            {getIcon({ iconType: 'star', className: 'w-4 h-4 text-white mt-1 -mr-2', fill: 'currentColor' })}
            Vote
        </Button>
    )

    return (
        <Popover.Root>
            <Popover.Trigger className="hyperlink flex items-center justify-center shadow-none">
                {trigger}
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Positioner sideOffset={8} side='bottom' className={'z-700!'}>
                    <Popover.Popup className="w-96 origin-[var(--transform-origin)] rounded-xs bg-[canvas] px-6 py-4 text-gray-900 shadow-sm shadow-gray-900 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0">
                        <Popover.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
                            {getIcon('arrow')}
                        </Popover.Arrow>

                        <Popover.Title className="text-gray-500 font-medium text-md flex items-center flex-row p-1 mb-4">
                            Issue's Voting Power
                            <Badge variant="success" static={true}>
                                <NumberFlowGroup>
                                    <NumberFlow
                                        value={currentVP}
                                        locales="en-US"
                                        format={{ useGrouping: false }}
                                        className="font-semibold text-sky-500"
                                    />
                                    {hasChanged && (
                                        <>
                                            <span className="text-xs">→</span>
                                            <NumberFlow
                                                value={sliderValue}
                                                locales="en-US"
                                                format={{ useGrouping: false }}
                                                className="text-xs"
                                            />
                                        </>
                                    )}
                                </NumberFlowGroup>
                            </Badge>
                        </Popover.Title>

                        <Popover.Description className="text-gray-600">
                            {/* Slider Labels */}
                            <div className="flex items-center mt-8 text-sm">
                                <div
                                    style={{ "--my-padding-left": `${minPercentage}%` }}
                                    className={`flex flex-col items-center ml-[var(--my-padding-left)]`}>
                                    <span className="absolute -mt-4 text-gray-500 text-xs w-10 text-center">Min VP</span>
                                    <NumberFlow
                                        value={minVP}
                                        locales="en-US"
                                        format={{ useGrouping: false }}
                                        className="font-semibold"
                                    />
                                </div>
                                <div style={{ "--my-padding-left": `${topPercentage - (minPercentage)}%` }}
                                    className={`flex flex-col items-center ml-[var(--my-padding-left)]`}>
                                    <span className="absolute -mt-4 text-gray-500 text-xs w-24 text-center">Top 1 Issue's VP</span>
                                    <NumberFlow
                                        value={topVP}
                                        locales="en-US"
                                        format={{ useGrouping: false }}
                                        className="font-semibold -ml-8"
                                    />
                                </div>
                            </div>

                            {/* Slider */}
                            <div className="mb-4">
                                <RadixSlider.Root
                                    value={[sliderValue]}
                                    onValueChange={handleSliderChange}
                                    max={maxVP}
                                    min={0}
                                    step={1}
                                    className="relative flex h-5 w-full touch-none select-none items-center"
                                >
                                    <RadixSlider.Track className="relative h-[3px] grow rounded-full bg-zinc-300 dark:bg-zinc-800">
                                        <RadixSlider.Range className="absolute h-full rounded-full bg-black dark:bg-white" />
                                        {/* Dashed line from original position when dragging */}
                                        {hasChanged && (
                                            <div
                                                className="absolute h-full border-l-2 border-dashed border-gray-400 opacity-50"
                                                style={{ left: `${(originalVP / maxVP) * 100}%` }}
                                            />
                                        )}
                                    </RadixSlider.Track>
                                    <RadixSlider.Thumb className="relative hyperlink block h-5 w-5 rounded-[1rem] bg-white shadow-md ring ring-black/10">
                                        <NumberFlow
                                            value={sliderValue}
                                            locales="en-US"
                                            format={{ useGrouping: false }}
                                            plugins={[continuous]}
                                            className="absolute  left-1/2 -translate-x-1/2 text-xs text-gray-500 font-semibold"
                                        />
                                    </RadixSlider.Thumb>
                                </RadixSlider.Root>
                            </div>

                            {/* Remaining VP */}
                            <div className="mb-4 text-center">
                                <span className="text-sm text-gray-500">Your VP: </span>
                                <NumberFlow
                                    value={vpAmount}
                                    locales="en-US"
                                    format={{ useGrouping: false }}
                                    className="font-semibold"
                                />
                                {hasChanged && (
                                    <>
                                        <span className="text-xs">→</span>
                                        <NumberFlow
                                            value={calculatedRemaining}
                                            locales="en-US"
                                            format={{ useGrouping: false }}
                                            className="text-xs"
                                        />
                                    </>
                                )}
                            </div>

                            {/* Apply Button */}
                            <div className="flex justify-center">
                                <Button
                                    variant="primary"
                                    onClick={handleApply}
                                    disabled={isApplying}
                                    className={cn(
                                        "px-6",
                                        isApplying && "cursor-wait"
                                    )}
                                >
                                    {isApplying ? <>
                                        <Spinner className='w-5 h-5' key={'ellipsis'}
                                            variant={'ellipsis'} /> saving...</> :
                                        'Save'}
                                </Button>
                            </div>
                        </Popover.Description>
                    </Popover.Popup>
                </Popover.Positioner>
            </Popover.Portal>
        </Popover.Root>
    )
}

export default VotePopover
