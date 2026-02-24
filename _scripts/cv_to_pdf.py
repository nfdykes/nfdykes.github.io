#!/usr/bin/env python3
"""Convert an al-folio cv.yml to a clean academic CV PDF."""

import yaml
import re
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, KeepTogether
)
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_RIGHT


def strip_html(text):
    """Strip HTML tags but preserve link text."""
    text = re.sub(r'<a[^>]*href="([^"]*)"[^>]*>([^<]*)</a>', r'\2', text)
    text = re.sub(r'<[^>]+>', '', text)
    return text


def build_styles():
    """Build paragraph styles for the CV."""
    dark = HexColor("#1a1a1a")
    mid = HexColor("#444444")
    accent = HexColor("#2c5282")

    return {
        'name': ParagraphStyle(
            'Name', fontName='Helvetica-Bold', fontSize=18,
            textColor=dark, spaceAfter=2*mm, alignment=TA_LEFT,
        ),
        'section': ParagraphStyle(
            'Section', fontName='Helvetica-Bold', fontSize=11,
            textColor=accent, spaceBefore=6*mm, spaceAfter=2*mm,
            alignment=TA_LEFT,
        ),
        'entry_title': ParagraphStyle(
            'EntryTitle', fontName='Helvetica-Bold', fontSize=9.5,
            textColor=dark, spaceBefore=3*mm, spaceAfter=0.5*mm,
        ),
        'entry_sub': ParagraphStyle(
            'EntrySub', fontName='Helvetica', fontSize=9,
            textColor=mid, spaceAfter=0.5*mm,
        ),
        'entry_desc': ParagraphStyle(
            'EntryDesc', fontName='Helvetica', fontSize=9,
            textColor=mid, leftIndent=4*mm, spaceAfter=0.5*mm,
        ),
        'map_key': ParagraphStyle(
            'MapKey', fontName='Helvetica-Bold', fontSize=9.5,
            textColor=dark, spaceAfter=0.5*mm,
        ),
        'map_value': ParagraphStyle(
            'MapValue', fontName='Helvetica', fontSize=9.5,
            textColor=mid, spaceAfter=1*mm, leftIndent=4*mm,
        ),
    }


def build_pdf(yml_path, output_path):
    sections = yaml.safe_load(open(yml_path, 'r'))
    styles = build_styles()

    doc = SimpleDocTemplate(
        output_path, pagesize=A4,
        leftMargin=22*mm, rightMargin=22*mm,
        topMargin=20*mm, bottomMargin=18*mm,
    )

    story = []

    # Extract name from General Information if available
    for section in sections:
        if section.get('type') == 'map':
            for item in section.get('contents', []):
                if item.get('name') == 'Full Name':
                    story.append(Paragraph(item['value'], styles['name']))
                    break
            break

    accent = HexColor("#2c5282")

    for section in sections:
        title = section.get('title', '')
        stype = section.get('type', '')
        contents = section.get('contents', [])

        # Section heading + rule
        story.append(Paragraph(title.upper(), styles['section']))
        story.append(HRFlowable(
            width="100%", thickness=0.5, color=accent,
            spaceBefore=0, spaceAfter=2*mm,
        ))

        if stype == 'map':
            for item in contents:
                name = item.get('name', '')
                value = item.get('value', '')
                if name == 'Full Name':
                    continue  # already used as header
                story.append(Paragraph(f"{name}", styles['map_key']))
                story.append(Paragraph(strip_html(str(value)), styles['map_value']))

        elif stype == 'time_table':
            for entry in contents:
                entry_block = []
                etitle = entry.get('title', '')
                institution = entry.get('institution', '')
                year = str(entry.get('year', ''))
                descriptions = entry.get('description', [])

                # Title line with year right-aligned via a table-like approach
                if year:
                    line = f"<b>{strip_html(etitle)}</b> <font color='#888888' size='8'>| {year}</font>"
                else:
                    line = f"<b>{strip_html(etitle)}</b>"
                entry_block.append(Paragraph(line, styles['entry_title']))

                if institution:
                    entry_block.append(Paragraph(strip_html(institution), styles['entry_sub']))

                for desc in (descriptions or []):
                    desc = strip_html(str(desc))
                    entry_block.append(Paragraph(f"– {desc}", styles['entry_desc']))

                story.append(KeepTogether(entry_block))

    doc.build(story)
    print(f"PDF written to {output_path}")


if __name__ == '__main__':
    import sys
    yml = sys.argv[1] if len(sys.argv) > 1 else '_data/cv.yml'
    out = sys.argv[2] if len(sys.argv) > 2 else 'assets/pdf/cv.pdf'
    build_pdf(yml, out)
