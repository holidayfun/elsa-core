﻿using Elsa.Activities.Telnyx.Activities;
using Elsa.Activities.Telnyx.Webhooks.Payloads.Call;
using Elsa.Services;

namespace Elsa.Activities.Telnyx.Handlers
{
    public class ResumePlayAudio : ResumeWebhookDrivenActivity<PlayAudio, CallPlaybackStartedPayload>
    {
        public ResumePlayAudio(IWorkflowLaunchpad workflowLaunchpad) : base(workflowLaunchpad)
        {
        }
    }
}