(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/support-ticket-system/support-ticket-system/frontend/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/support-ticket-system/support-ticket-system/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api';
async function request(path, init) {
    const r = await fetch(`${API}${path}`, {
        ...init,
        headers: {
            'Content-Type': 'application/json',
            ...init?.headers ?? {}
        },
        cache: 'no-store'
    });
    if (!r.ok) {
        const b = await r.json().catch(()=>({
                message: 'Request failed'
            }));
        throw new Error(b.message ?? 'Request failed');
    }
    return r.json();
}
const api = {
    dashboard: ()=>request('/dashboard'),
    agents: ()=>request('/agents'),
    tickets: (q)=>request(`/tickets?${q}`),
    ticket: (id)=>request(`/tickets/${id}`),
    create: (body)=>request('/tickets', {
            method: 'POST',
            body: JSON.stringify(body)
        }),
    update: (id, body)=>request(`/tickets/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body)
        }),
    assign: (id, agentId)=>request(`/tickets/${id}/assign`, {
            method: 'PATCH',
            body: JSON.stringify({
                agentId
            })
        }),
    status: (id, status)=>request(`/tickets/${id}/status`, {
            method: 'PATCH',
            body: JSON.stringify({
                status
            })
        }),
    delete: (id)=>request(`/tickets/${id}`, {
            method: 'DELETE'
        })
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/support-ticket-system/support-ticket-system/frontend/components/TicketForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TicketForm",
    ()=>TicketForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/support-ticket-system/support-ticket-system/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/support-ticket-system/support-ticket-system/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/support-ticket-system/support-ticket-system/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/support-ticket-system/support-ticket-system/frontend/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const initial = {
    customerName: '',
    customerEmail: '',
    subject: '',
    description: '',
    priority: 'MEDIUM',
    category: 'TECHNICAL'
};
function TicketForm() {
    _s();
    const [f, setF] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial), [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const set = (k, v)=>setF((x)=>({
                ...x,
                [k]: v
            }));
    async function submit(e) {
        e.preventDefault();
        setError('');
        if (!f.customerName.trim() || !f.subject.trim()) {
            setError('Name and subject are required.');
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(f.customerEmail)) {
            setError('Enter a valid email.');
            return;
        }
        if (f.description.trim().length < 10) {
            setError('Description must contain at least 10 characters.');
            return;
        }
        try {
            setBusy(true);
            const t = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].create(f);
            router.push(`/tickets/${t.id}`);
            router.refresh();
        } catch (e) {
            setError(e instanceof Error ? e.message : 'Unable to create ticket');
        } finally{
            setBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: submit,
        className: "card space-y-5 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Name *",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "field mt-1",
                                value: f.customerName,
                                onChange: (e)=>set('customerName', e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/components/TicketForm.tsx",
                                lineNumber: 3,
                                columnNumber: 869
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/components/TicketForm.tsx",
                        lineNumber: 3,
                        columnNumber: 856
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Email *",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                className: "field mt-1",
                                value: f.customerEmail,
                                onChange: (e)=>set('customerEmail', e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/components/TicketForm.tsx",
                                lineNumber: 3,
                                columnNumber: 994
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/components/TicketForm.tsx",
                        lineNumber: 3,
                        columnNumber: 980
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/components/TicketForm.tsx",
                lineNumber: 3,
                columnNumber: 813
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block",
                children: [
                    "Subject *",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "field mt-1",
                        value: f.subject,
                        onChange: (e)=>set('subject', e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/components/TicketForm.tsx",
                        lineNumber: 3,
                        columnNumber: 1160
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/components/TicketForm.tsx",
                lineNumber: 3,
                columnNumber: 1126
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block",
                children: [
                    "Description *",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        rows: 6,
                        className: "field mt-1",
                        value: f.description,
                        onChange: (e)=>set('description', e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/components/TicketForm.tsx",
                        lineNumber: 3,
                        columnNumber: 1299
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/components/TicketForm.tsx",
                lineNumber: 3,
                columnNumber: 1261
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Priority *",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "field mt-1",
                                value: f.priority,
                                onChange: (e)=>set('priority', e.target.value),
                                children: [
                                    'LOW',
                                    'MEDIUM',
                                    'HIGH',
                                    'CRITICAL'
                                ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: x
                                    }, x, false, {
                                        fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/components/TicketForm.tsx",
                                        lineNumber: 3,
                                        columnNumber: 1618
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/components/TicketForm.tsx",
                                lineNumber: 3,
                                columnNumber: 1480
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/components/TicketForm.tsx",
                        lineNumber: 3,
                        columnNumber: 1463
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Category *",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "field mt-1",
                                value: f.category,
                                onChange: (e)=>set('category', e.target.value),
                                children: [
                                    'TECHNICAL',
                                    'BILLING',
                                    'ACCOUNT',
                                    'GENERAL'
                                ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: x
                                    }, x, false, {
                                        fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/components/TicketForm.tsx",
                                        lineNumber: 3,
                                        columnNumber: 1829
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/components/TicketForm.tsx",
                                lineNumber: 3,
                                columnNumber: 1682
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/components/TicketForm.tsx",
                        lineNumber: 3,
                        columnNumber: 1665
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/components/TicketForm.tsx",
                lineNumber: 3,
                columnNumber: 1420
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "rounded-lg bg-red-50 p-3 text-red-700",
                children: error
            }, void 0, false, {
                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/components/TicketForm.tsx",
                lineNumber: 3,
                columnNumber: 1890
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                disabled: busy,
                className: "btn btn-primary disabled:opacity-50",
                children: busy ? 'Creating…' : 'Create Ticket'
            }, void 0, false, {
                fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/components/TicketForm.tsx",
                lineNumber: 3,
                columnNumber: 1955
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/support-ticket-system/support-ticket-system/frontend/components/TicketForm.tsx",
        lineNumber: 3,
        columnNumber: 758
    }, this);
}
_s(TicketForm, "Nw+7VAKqpGE37x6a3s6FQ+jUNek=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = TicketForm;
var _c;
__turbopack_context__.k.register(_c, "TicketForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/support-ticket-system/support-ticket-system/frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/support-ticket-system/support-ticket-system/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Downloads/support-ticket-system/support-ticket-system/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Downloads/support-ticket-system/support-ticket-system/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$support$2d$ticket$2d$system$2f$support$2d$ticket$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/support-ticket-system/support-ticket-system/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Downloads/support-ticket-system/support-ticket-system/frontend/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Downloads/support-ticket-system/support-ticket-system/frontend/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Downloads/support-ticket-system/support-ticket-system/frontend/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Downloads_support-ticket-system_support-ticket-system_frontend_c68cb9bb._.js.map